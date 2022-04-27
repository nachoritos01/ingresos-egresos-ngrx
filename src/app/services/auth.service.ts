import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
export interface UserInterface {
  nombre: string, correo: string, password: string
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: AngularFireAuth, private roter: Router) { }

  crearUsuario(user: UserInterface) {
    const { correo, password } = user;

    console.log(user);

    this.auth.createUserWithEmailAndPassword(correo, password).then(response => {
      console.log(response);
      this.roter.navigate(['/']);
    }).catch(e => console.log(e)
    )

  }

  loginUsuario(user: UserInterface) {

    const { correo, password } = user;
    return this.auth.signInWithEmailAndPassword(correo, password)
  }
}
