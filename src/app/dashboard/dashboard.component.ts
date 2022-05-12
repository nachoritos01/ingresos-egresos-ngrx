import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter, Subscription } from 'rxjs';
import { AppState } from '../app.reducer';
import { IngresoEgresoService } from '../services/ingreso-egreso.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [],
})
export class DashboardComponent implements OnInit, OnDestroy {
  unserSubs!: Subscription;
  constructor(
    private store: Store<AppState>,
    private ingresoEgresoService: IngresoEgresoService
  ) {}
  ngOnDestroy(): void {
    this.unserSubs.unsubscribe();
  }

  ngOnInit() {
    this.unserSubs = this.store
      .select('user')
      .pipe(
        filter((auth) => {
          return auth.user != null;
        })
      )
      .subscribe(({user}) => {
        console.log(user?.uid);
        this.ingresoEgresoService.initIngresosEgresosListener(user?.uid || '')
      });
  }
}
