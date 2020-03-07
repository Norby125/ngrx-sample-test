import { NgModule, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter.component';
import { Routes, RouterModule } from '@angular/router';
import { StoreModule, ActionReducerMap } from '@ngrx/store';

import * as fromCounterReducer from './state/counter.reducer';

export const COUNTER_REDUCER_TOKEN = new InjectionToken<
  ActionReducerMap<fromCounterReducer.State>
>('Counter feature reducers');

const routes: Routes = [
  {
    path: '',
    component: CounterComponent
  }
];

@NgModule({
  declarations: [CounterComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromCounterReducer.featureKey, COUNTER_REDUCER_TOKEN),
    RouterModule.forChild(routes)
  ],
  providers: [
    {
      provide: COUNTER_REDUCER_TOKEN,
      useValue: fromCounterReducer.counterReducer,
    },
  ]
})
export class CounterModule { }
