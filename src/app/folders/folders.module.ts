import { NgModule, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoldersRoutingModule } from './folders-routing.module';
import { FoldersComponent } from './folders.component';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { StoreModule, ActionReducerMap } from '@ngrx/store';

import * as fromCustomersReducer from './state/customers.reducer';
import { TranslationModule } from '../translation/translation.module';


export const CUSTOMERS_REDUCER_TOKEN = new InjectionToken<
  ActionReducerMap<fromCustomersReducer.State>
>('Customers feature reducers');
@NgModule({
  declarations: [FoldersComponent],
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    FoldersRoutingModule,
    TranslationModule,
    StoreModule.forFeature(fromCustomersReducer.featureKey, CUSTOMERS_REDUCER_TOKEN),
  ],
  providers: [
    {
      provide: CUSTOMERS_REDUCER_TOKEN,
      useValue: fromCustomersReducer.customersReducer,
    },
  ]
})
export class FoldersModule {
  constructor() {
    console.log('instantiated');
  }
}
