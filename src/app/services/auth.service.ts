import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, take } from 'rxjs';
import { Usuario } from 'src/models/user';
import { appReducers, AppState } from '../app.reducer';
import * as authActions from '../auth/auth.actions';
export interface UserInterface {
  nombre: string;
  correo: string;
  password: string;
}
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _user: Usuario | undefined;
  constructor(
    private auth: AngularFireAuth,
    private roter: Router,
    private firestore: AngularFirestore,
    private store: Store<AppState>
  ) {}

  get user() {
    return {... this._user}
  }

  initAuthListener() {
    this.auth.authState.subscribe((fireBaseUser) => {
      if (fireBaseUser !== null) {
        this.firestore
          .doc(`${fireBaseUser.uid}/usuario`)
          .valueChanges()
          .pipe(take(1))
          .subscribe((fireSotoreUser: any) => {
            const user = Usuario.fromFirebase(fireSotoreUser);
            this._user = user;
            this.store.dispatch(authActions.setUser({ user }));
          });
      } else {
        this._user= undefined;
        this.store.dispatch(authActions.unSetUser());
      }
    });
  }

  crearUsuario(userData: UserInterface) {
    const { correo, password } = userData;

    return this.auth
      .createUserWithEmailAndPassword(correo, password)
      .then(({ user }): any => {
        if (user) {
          const newUser = new Usuario(user.uid, userData.nombre, user.email);
          return this.firestore.doc(`${user.uid}/usuario`).set({ ...newUser });
        }
      });
  }

  loginUsuario(user: UserInterface) {
    const { correo, password } = user;
    return this.auth.signInWithEmailAndPassword(correo, password);
  }

  logout() {
    return this.auth.signOut();
  }

  isAuth() {
    return this.auth.authState.pipe(
      map((firebaseUser) => firebaseUser !== null)
    );
  }
}
