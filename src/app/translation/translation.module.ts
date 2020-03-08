import { NgModule, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule, ActionReducerMap } from '@ngrx/store';

import * as fromTranslationReducer from './state/translation.reducer';

export const TRANSLATION_REDUCER_TOKEN = new InjectionToken<
  ActionReducerMap<fromTranslationReducer.State>
>('Translation feature reducers');

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromTranslationReducer.featureKey, TRANSLATION_REDUCER_TOKEN),
  ],
  providers: [
    {
      provide: TRANSLATION_REDUCER_TOKEN,
      useValue: fromTranslationReducer.reducer,
    }
  ]
})
export class TranslationModule { }
