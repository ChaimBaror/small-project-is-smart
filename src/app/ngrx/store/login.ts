import { logging } from 'protractor';
import { createAction, props, createReducer, on } from '@ngrx/store';
import { Action } from 'rxjs/internal/scheduler/Action';

export interface login {
    islogin: boolean;
    name: string;
    mail: string,
}

const logging = createAction(
    '[try login] login',
    props<({ mail: string, password: string })>()
)

const loggout = createAction(
    '[login] loggout',
    props<({ id: string })>()
)
export interface StateLogin {
    login: login
}

const initialState = {
    islogin: false,
    name: '',
    mail: '',
}
const loginReducer = createReducer(
    initialState,
    on(logging(state : StateLogin ,action :Action)):StateLogin =>{
        return
    }
)

export function _loginReducer(state : StateLogin ,action :Action){
return loginReducer(state,action)
}