import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IngresoEgresoService } from '../services/ingreso-egreso.service';
import Swal from 'sweetalert2';
import { IngresoEgreso } from '../../models/ingreso-egreso';
import { Store } from '@ngrx/store';
import * as iu from '../shared/ui.actions';
import { AppState } from '../app.reducer';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-ingreso-egreso',
  templateUrl: './ingreso-egreso.component.html',
  styles: [],
})
export class IngresoEgresoComponent implements OnInit, OnDestroy {
  formIngresoEgreso!: FormGroup;
  tipo: string = 'ingreso';
  isLoading: boolean = false;
  cargando$!: Subscription;

  constructor(
    private fb: FormBuilder,
    private ingresoEgresoService: IngresoEgresoService,
    private store: Store<AppState>
  ) {}

  ngOnDestroy(): void {
    this.cargando$.unsubscribe();
  }

  ngOnInit() {
    this.formIngresoEgreso = this.fb.group({
      descripcion: ['', Validators.required],
      monto: ['', Validators.required],
      //tipo: ['', Validators.required],
    });
    this.cargando$ = this.store.select('ui').subscribe((ui) => {
      this.isLoading = ui.isLoading;
    });
  }

  crearIngresoEgreso() {
    if (this.formIngresoEgreso.invalid) return;
    this.store.dispatch(iu.isLoading());
    console.log(this.tipo);

    const { descripcion, monto } = this.formIngresoEgreso.value;

    const ingresoEgreso = new IngresoEgreso(descripcion, monto, this.tipo);

    this.ingresoEgresoService
      .crearIngresoEgreso(ingresoEgreso)
      .then((response) => {
        this.store.dispatch(iu.stopLoading());
        Swal.fire({
          icon: 'success',
          title: 'Registro creado',
          text: descripcion,
        });
        Swal.fire({
          icon: 'success',
          title: 'Registro creado',
          text: descripcion,
        });
      })
      .catch((e) => {
        this.store.dispatch(iu.stopLoading());
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: e.message,
        });
      });
  }
}
