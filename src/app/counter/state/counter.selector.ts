import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromCounter from './counter.reducer';

export const selectCounterState = createFeatureSelector<fromCounter.State>(fromCounter.featureKey);

export const selectCount = createSelector(
   selectCounterState,
  (state: fromCounter.State) => state.count
);
