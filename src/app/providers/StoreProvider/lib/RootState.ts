import { ReducersMapObject, Action, Reducer, EnhancedStore } from "@reduxjs/toolkit";
import { CounterState } from "entities/Counter";
import { UserState } from "entities/User";
import { LoginState } from "features/LoginByUsername";

export interface RootState {
    counter: CounterState
    user: UserState

    //async reducers
    login?: LoginState
}

export type RootStateKey = keyof RootState

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<RootState>;
    reduce: (state: RootState, action: Action) => RootState;
    add: (key: RootStateKey, reducer: Reducer) => void;
    remove: (key: RootStateKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<RootState> {
    reducerManager: ReducerManager
}