import { createAction, props } from '@ngrx/store';
import { Section } from '../folders';

// tslint:disable-next-line:ban-types
export const addCustomer = createAction('[Folder Component] Add folder', props<{ newCustomer: Section }>());
export const removeAllFolders = createAction('[Folder Component] Remove all folders');
