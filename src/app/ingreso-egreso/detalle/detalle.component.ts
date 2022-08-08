import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { IngresoEgreso } from 'src/models/ingreso-egreso';
import { Subscription } from 'rxjs';
import { IngresoEgresoService } from '../../services/ingreso-egreso.service';
import Swal from 'sweetalert2';
import { AppStateWhitIngresoEgreso } from '../ingreso-egreso.reducer';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styles: [],
})
export class DetalleComponent implements OnInit, OnDestroy {
  ingresoIngresoSubs!: Subscription;
  ingresoEgreso: any;

  constructor(
    private store: Store<AppStateWhitIngresoEgreso>,
    private ingresoEgresoService: IngresoEgresoService
  ) {}
  ngOnDestroy(): void {
    this.ingresoIngresoSubs.unsubscribe();
  }

  ngOnInit() {
    this.ingresoIngresoSubs = this.store
      .select('ingresoEgreso')
      .subscribe(({ items }) => {
        this.ingresoEgreso = items;
      });
  }
  /**
   * Método para eliminar, elimina en firebase y por sockets notifica
   * al observable por medio de redux
   * @param uuid
   */
  borrar(uuid: string | undefined) {
    if (uuid === undefined) return;
    console.log(uuid);
    this.ingresoEgresoService
      .borrarIngresoEgreso(uuid)
      .then(() => Swal.fire('Borrado', 'Item borrado', 'success'))
      .catch((error) => Swal.fire('Error', error.message, 'error'));
  }
}
