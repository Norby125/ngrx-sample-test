import { createReducer, on } from '@ngrx/store';
import { addTranslations } from './translation.actions';

export const featureKey = 'translations';

export interface Translation {
  key: string;
  value: string;
}
export interface State {
    translations: Translation[];
}
export const initialState: State = {translations: []};

const _translationReducer = createReducer(initialState,
  on(addTranslations, (state, action) => ({...state, translations: [...state.translations, ...action.translations]})),
);

export function reducer(state, action) {
  return _translationReducer(state, action);
}
