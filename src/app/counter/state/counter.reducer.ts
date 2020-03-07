import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './counter.actions';

export const featureKey = 'counter';

export interface State {
    count: number;
}
export const initialState: State = {count: 0};

const _counterReducer = createReducer(initialState,
  on(increment, state => ({...state, count: state.count + 1})),
  on(decrement, state => ({...state, count: state.count - 1})),
  on(reset, state => ({...state, count: 0})),
);

export function counterReducer(state, action) {
  return _counterReducer(state, action);
}
