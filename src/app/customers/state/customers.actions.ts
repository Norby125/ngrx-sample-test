import { createAction, props } from '@ngrx/store';
import { Section } from '../customers';

// tslint:disable-next-line:ban-types
export const addCustomer = createAction('[Customers Component] Add customer', props<{ newCustomer: Section }>());
export const removeAllCustomers = createAction('[Customers Component] Remove all customers');
