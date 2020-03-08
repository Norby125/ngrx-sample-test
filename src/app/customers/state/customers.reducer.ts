import { createReducer, on } from '@ngrx/store';
import { addCustomer, removeAllCustomers } from './customers.actions';

export const featureKey = 'customers';

export interface State {
    custmers: any[];
}
export const initialState: State = {custmers: []};

const _customersReducer = createReducer(initialState,
  on(addCustomer, (state, action) => ({...state, custmers: [...state.custmers, action.newCustomer]})),
  on(removeAllCustomers, state => ({...state, custmers: []})),
);

export function customersReducer(state, action) {
  return _customersReducer(state, action);
}
