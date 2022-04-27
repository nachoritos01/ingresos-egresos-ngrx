import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [],
})
export class LoginComponent implements OnInit {
  public formLogin!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.formLogin = this.fb.group({
      correo: ['', Validators.email],
      password: ['', Validators.required],
    });
  }

  login() {
    if (this.formLogin.invalid) return;

    Swal.fire({
      title: 'Auto close alert!',
      didOpen: () => {
        Swal.showLoading();
      },
    });

    this.auth
      .loginUsuario(this.formLogin.value)
      .then((response) => {
        console.log(response);
        Swal.close();
        this.router.navigate(['/']);
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.message,
        });
      });
  }
}
