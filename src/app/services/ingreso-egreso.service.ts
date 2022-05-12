import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import 'firebase/firestore';
import { IngresoEgreso } from 'src/models/ingreso-egreso';
import { AuthService } from './auth.service';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IngresoEgresoService {
  constructor(
    private firestore: AngularFirestore,
    private authService: AuthService
  ) {}

  crearIngresoEgreso(ingresoEgreso: IngresoEgreso) {
    const { uid } = this.authService.user;
    const { descripcion, monto, tipo } = ingresoEgreso;

    return this.firestore
      .doc(`${uid}/ingresos-egresos`)
      .collection('items')
      .add({
        descripcion,
        monto,
        tipo,
      });
  }

  initIngresosEgresosListener(uid: string) {
    this.firestore
      .collection(`${uid}/ingresos-egresos/items`)
      .snapshotChanges()
      .pipe(
        map((snapshot) =>
          snapshot.map((doc) => ({
            uid: doc.payload.doc.id,
            ...(doc.payload.doc.data() as any),
          }))
        )
      )
      .subscribe(console.log);
  }
}
