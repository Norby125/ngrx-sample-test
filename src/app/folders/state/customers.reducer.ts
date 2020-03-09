import { createReducer, on } from '@ngrx/store';
import { addCustomer, removeAllFolders } from './customers.actions';

export const featureKey = 'folders';

export interface State {
    custmers: any[];
}
export const initialState: State = {custmers: []};

const _customersReducer = createReducer(initialState,
  on(addCustomer, (state, action) => ({...state, custmers: [...state.custmers, action.newCustomer]})),
  on(removeAllFolders, state => ({...state, custmers: []})),
);

export function customersReducer(state, action) {
  return _customersReducer(state, action);
}
