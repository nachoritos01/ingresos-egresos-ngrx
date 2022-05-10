import { createReducer, on } from '@ngrx/store';
import { setUser, unSetUser } from './auth.actions';
import { Usuario } from '../../models/user';

export interface State {
  user: Usuario | null;
}

export const initialState: State = {
  user: null, //Por defecto null
};

const _authReducer = createReducer(
  initialState,
  // Recibimos el usuario con props desde la accion, por medio de la desestructuracion se 
  // copian todos los valores de user { ...user }, para no mutar la data
  // esto para romper la relacion con el objeto o arreglo
  on(setUser, (state, { user }) => ({ ...state, user: { ...user } })),
  //Borrando el usuario
  on(unSetUser, (state) => ({ ...state, user: null })) 
);

export function authReducer(state :any, action: any) {
  return _authReducer(state, action);
}
