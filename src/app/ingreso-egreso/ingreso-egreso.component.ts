import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ingreso-egreso',
  templateUrl: './ingreso-egreso.component.html',
  styles: [],
})
export class IngresoEgresoComponent implements OnInit {
  formIngresoEgreso!: FormGroup;
  tipo: string = 'ingreso';

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.formIngresoEgreso = this.fb.group({
      descripcion: ['', Validators.required],
      monto: ['', Validators.required],
      //tipo: ['', Validators.required],
    });
  }

  crearIngresoEgreso() {
    if (this.formIngresoEgreso.invalid) return;
    console.log(this.tipo);

    console.log(this.formIngresoEgreso.value);
  }
}
