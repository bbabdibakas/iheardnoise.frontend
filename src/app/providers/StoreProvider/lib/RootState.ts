import { Action, EnhancedStore, Reducer, ReducersMapObject } from "@reduxjs/toolkit";
import { UserState } from "entities/User";
import { AuthFormState } from "features/AuthByUsername";

export interface RootState {
    user: UserState

    //async reducers
    authForm?: AuthFormState
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