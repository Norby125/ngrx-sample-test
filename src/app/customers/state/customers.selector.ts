import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromCustomers from './customers.reducer';

export const selectCustomersState = createFeatureSelector<fromCustomers.State>(fromCustomers.featureKey);

export const selectCustomers = createSelector(
   selectCustomersState,
  (state: fromCustomers.State) => state.custmers
);
