import { CounterState } from "entities/Counter";
import { LoginState } from "features/LoginByUsername";

export interface RootState {
    counter: CounterState
    login: LoginState
}