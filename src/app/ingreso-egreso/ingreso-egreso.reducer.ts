import { Action, createReducer, on } from '@ngrx/store';
import { setItems, unSetItems } from './ingreso-egreso.actions';
import { IngresoEgreso } from '../../models/ingreso-egreso';
import { AppState } from '../app.reducer';

export interface State {
  items: IngresoEgreso[];
}
export interface AppStateWhitIngresoEgreso extends AppState {
  ingresoEgreso: State;
}

export const initialState: State = {
  items: [],
};

const _ingresoEgresoReducer = createReducer(
  initialState,

  on(setItems, (state, { items }) => ({ ...state, items: [...items] })),
  on(unSetItems, (state) => ({ ...state, items: [] }))
);

export function ingresoEgresoReducer(state: any, action: Action) {
  return _ingresoEgresoReducer(state, action);
}
