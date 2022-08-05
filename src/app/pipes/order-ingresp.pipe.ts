import { Pipe, PipeTransform } from '@angular/core';
import { IngresoEgreso } from '../../models/ingreso-egreso';

@Pipe({
  name: 'orderIngresp',
})
export class OrderIngrespPipe implements PipeTransform {
  transform(items: IngresoEgreso[]): IngresoEgreso[] {
    const newItems = [...items];

    return newItems.sort((a, b) => {
      return a.tipo === 'ingreso' ? -1 : 1;
    });
  }
}
