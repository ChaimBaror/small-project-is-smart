import { createAction, props, on, createReducer, State } from '@ngrx/store';
import { User } from 'src/app/user';

export const addUsers = createAction(
    '[get user] Increment',
    props<{ users: User[] }>()
);
export const addUser = createAction(
    '[get user] Decrement',
    props<{ user: User[] }>()
);

export const reset = createAction(
    '[get user] Reset',
    props()
);
export const initialState =[];
const _userReducer = createReducer(
    initialState,
    on(addUsers, state => ({ ...state, User: state  })),

    on(addUser, state => state ),
    on(reset, state => state),
);

export function userReducer(state, action) {
    return _userReducer(state, action);
}