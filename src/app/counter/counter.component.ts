import {Component, OnInit} from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromCounterActions from './state/counter.actions';
import * as fromCounterReducer from './state/counter.reducer';
import * as fromCounterSelector from './state/counter.selector';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: []
})
export class CounterComponent implements OnInit{

  count$: Observable<number>;

  constructor(private store: Store<fromCounterReducer.State>) {
    this.count$ = store.pipe(select(fromCounterSelector.selectCount));
  }

  increment() {
    this.store.dispatch(fromCounterActions.increment());
  }

  decrement() {
    this.store.dispatch(fromCounterActions.decrement());
  }

  reset() {
    this.store.dispatch(fromCounterActions.reset());
  }

  ngOnInit(): void {
    setInterval( () => {
      this.store.dispatch(fromCounterActions.increment());
    }, 5000);
  }
}

