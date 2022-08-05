import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter, Subscription } from 'rxjs';
import { AppState } from '../app.reducer';
import { IngresoEgresoService } from '../services/ingreso-egreso.service';
import { IngresoEgreso } from '../../models/ingreso-egreso';
import { setItems } from '../ingreso-egreso/ingreso-egreso.actions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [],
})
export class DashboardComponent implements OnInit, OnDestroy {
  unserSubs!: Subscription;
  ingresosSubs!: Subscription;
  constructor(
    private store: Store<AppState>,
    private ingresoEgresoService: IngresoEgresoService
  ) {}
  ngOnDestroy(): void {
    this.unserSubs.unsubscribe();
    this.ingresosSubs.unsubscribe();
  }

  ngOnInit() {
    this.unserSubs = this.store
      .select('user')
      .pipe(
        filter((auth) => {
          return auth.user != null;
        })
      )
      .subscribe(({ user }) => {
        this.ingresosSubs = this.ingresoEgresoService
          .initIngresosEgresosListener(user?.uid || '')
          .subscribe((ingresosEgresos) => {
            this.store.dispatch(setItems({ items: ingresosEgresos }));
          });
      });
  }
}
