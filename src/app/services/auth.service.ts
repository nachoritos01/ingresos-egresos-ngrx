import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { Usuario } from 'src/models/user';
export interface UserInterface {
  nombre: string;
  correo: string;
  password: string;
}
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private auth: AngularFireAuth,
    private roter: Router,
    private firestore: AngularFirestore
  ) {}

  initAuthListener() {
    this.auth.authState.subscribe((fireBaseUser) => {
      console.log(fireBaseUser?.email, fireBaseUser?.uid);
    });
  }

  crearUsuario(userData: UserInterface) {
    const { correo, password } = userData;

    return this.auth
      .createUserWithEmailAndPassword(correo, password)
      .then(({ user }): any => {
        if (user) {
          const newUser = new Usuario(user.uid, userData.nombre, user.email);
          return this.firestore.doc(`${user.uid}/usuario`).set({...newUser});
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
