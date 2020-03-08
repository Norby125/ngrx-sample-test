import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromTranslation from './translation.reducer';

export const selectTranslationState = createFeatureSelector<fromTranslation.State>(fromTranslation.featureKey);

export const selectTranslations = createSelector(
   selectTranslationState,
  (state: fromTranslation.State) => state.translations
);
