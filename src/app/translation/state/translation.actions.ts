import { createAction, props } from '@ngrx/store';
import * as fromTranlsationReducer from './translation.reducer';

export const addTranslations = createAction(
  '[App Component] Add basic translations',
  props<{ translations: fromTranlsationReducer.Translation[] }>()
);
