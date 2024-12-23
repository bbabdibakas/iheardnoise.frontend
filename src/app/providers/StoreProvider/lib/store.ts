import { ReducersMapObject, configureStore } from "@reduxjs/toolkit";
import { RootState } from "./RootState";
import { counterReducer } from "entity/Counter";

export function createReduxStore(initialState?: RootState) {
    const rootReducers: ReducersMapObject<RootState> = {
        counter: counterReducer,
    }

    const store = configureStore({
        reducer: rootReducers,
        devTools: true,
        preloadedState: initialState
    })

    return store;
}