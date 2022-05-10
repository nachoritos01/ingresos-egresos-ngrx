import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import 'firebase/firestore';
import { IngresoEgreso } from 'src/models/ingreso-egreso';

@Injectable({
  providedIn: 'root'
})
export class IngresoEgresoService {

  constructor(private firestore :AngularFirestore) { }

  crearIngresoEgreso(ingresoEgreso : IngresoEgreso) {
      this.firestore.doc(`/ingresos-egresos`);
  }
}
