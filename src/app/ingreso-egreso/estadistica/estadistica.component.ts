import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { IngresoEgreso } from '../../../models/ingreso-egreso';
import { AppStateWhitIngresoEgreso, State } from '../ingreso-egreso.reducer';

@Component({
  selector: 'app-estadistica',
  templateUrl: './estadistica.component.html',
  styles: [],
})
export class EstadisticaComponent implements OnInit {
  ingresos: number = 0;
  egresos: number = 0;
  totalIngresos: number = 0;
  totalEgresos: number = 0;

  constructor(private store: Store<AppStateWhitIngresoEgreso>) {}

  ngOnInit() {
    this.store.select('ingresoEgreso').subscribe(({ items }) => {
      this.generarEstadistica(items);
    });
  }

  generarEstadistica(items: IngresoEgreso[]) {
    const total = 0;
    this.ingresos = 0;
    this.egresos = 0;
    this.totalIngresos = 0;
    this.totalEgresos = 0;

    for (const item of items) {
      if (item.tipo === 'ingreso') {
        this.ingresos++;
        this.totalIngresos += Number(item.monto);
      } else {
        this.egresos++;
        this.totalEgresos += Number(item.monto);
      }
    }
  }
}
