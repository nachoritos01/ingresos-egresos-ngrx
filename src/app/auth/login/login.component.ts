import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';
import { Subscription } from 'rxjs';
import * as ui from 'src/app/shared/ui.actions';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [],
})
export class LoginComponent implements OnInit, OnDestroy {
  public formLogin!: FormGroup;
  public cargando: boolean = false;
  public uiSubscription$!: Subscription;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private store: Store<AppState>
  ) {}
  ngOnDestroy(): void {
    this.uiSubscription$.unsubscribe();
  }

  ngOnInit() {
    this.formLogin = this.fb.group({
      correo: ['', Validators.email],
      password: ['', Validators.required],
    });

    this.uiSubscription$ = this.store.select('ui').subscribe((ui) => {
      this.cargando = ui.isLoading;
    });
  }

  login() {
    if (this.formLogin.invalid) return;

    this.auth
      .loginUsuario(this.formLogin.value)
      .then((response) => {
        this.router.navigate(['/']);
        this.store.dispatch(ui.stopLoading());
      })
      .catch((error) => {
        this.store.dispatch(ui.stopLoading());
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.message,
        });
      });
  }
}
