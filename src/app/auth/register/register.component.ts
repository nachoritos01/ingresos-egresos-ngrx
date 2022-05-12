import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';
import { Subscription } from 'rxjs';
import * as ui from '../../shared/ui.actions';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [],
})
export class RegisterComponent implements OnInit, OnDestroy {
  public forma!: FormGroup;
  public uiSubscription$!: Subscription;
  public cargando: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private store: Store<AppState>
  ) {}
  ngOnDestroy(): void {
    this.uiSubscription$.unsubscribe();
  }

  ngOnInit() {
    this.forma = this.fb.group({
      nombre: ['', Validators.required],
      correo: ['', Validators.required],
      password: ['', Validators.required],
    });

    this.uiSubscription$ = this.store
      .select('ui')
      .subscribe((ui) => (this.cargando = ui.isLoading));
  }

  crearUsuario() {
    if (this.forma.invalid) return;

    this.store.dispatch(ui.isLoading());

    this.authService
      .crearUsuario(this.forma.value)
      .then((response) => {
        this.store.dispatch(ui.stopLoading());
        this.router.navigate(['/']);
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
