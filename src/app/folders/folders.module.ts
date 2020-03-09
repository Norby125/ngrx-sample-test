import { NgModule, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { StoreModule, ActionReducerMap } from '@ngrx/store';

import * as fromCustomersReducer from './state/customers.reducer';
import { TranslationModule } from '../translation/translation.module';


export const CUSTOMERS_REDUCER_TOKEN = new InjectionToken<
  ActionReducerMap<fromCustomersReducer.State>
>('Customers feature reducers');
@NgModule({
  declarations: [CustomersComponent],
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    CustomersRoutingModule,
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
export class CustomersModule {
  constructor() {
    console.log('instantiated');
  }
}
