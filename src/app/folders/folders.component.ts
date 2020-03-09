import { Component, OnInit } from '@angular/core';

import * as fromCustomersActions from './state/customers.actions';
import * as fromCustomersReducer from './state/customers.reducer';
import * as fromCustomersSelector from './state/customers.selector';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-customers',
  templateUrl: './folders.component.html',
  styleUrls: []
})
export class FoldersComponent implements OnInit {
  folders$: Observable<any[]>;

  constructor(private store: Store<fromCustomersReducer.State>) {
    this.folders$ = store.pipe(select(fromCustomersSelector.selectCustomers));
  }

  ngOnInit() {
    setInterval( () => {
      this.store.dispatch(
        fromCustomersActions.addCustomer({
          newCustomer: {
            name: 'Photos',
            updated: new Date('1/1/16')
          }
        })
      );

      this.store.dispatch(
        fromCustomersActions.addCustomer({
          newCustomer: {
            name: 'Recipes',
            updated: new Date('1/17/16')
          }
        })
      );

      this.store.dispatch(
        fromCustomersActions.addCustomer({
          newCustomer: {
            name: 'Work',
            updated: new Date('1/28/16')
          }
        })
      );
    }, 5000);

  }

  deleteAllCustomers() {
    this.store.dispatch(fromCustomersActions.removeAllFolders());
  }
}
