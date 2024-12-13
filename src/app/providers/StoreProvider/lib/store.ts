import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { RootState } from "./RootState";
import { userReducer } from "entities/User";
import { createReducerManager } from "./reducerManager";

export function createReduxStore(initialState?: RootState, asyncReducers?: ReducersMapObject<RootState>) {
    const rootReducers: ReducersMapObject<RootState> = {
        user: userReducer,
        ...asyncReducers
    }

    const reducerManager = createReducerManager(rootReducers)
    const store = configureStore({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState
    })

    //for test
    //@ts-ignore
    store.reducerManager = reducerManager

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];