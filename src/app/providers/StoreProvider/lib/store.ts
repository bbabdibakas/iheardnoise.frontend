import { ReducersMapObject, configureStore } from "@reduxjs/toolkit";
import { RootState } from "./RootState";
import { counterReducer } from "entities/Counter";
import { loginReducer } from "features/LoginByUsername";

export function createReduxStore(initialState?: RootState) {
    const rootReducers: ReducersMapObject<RootState> = {
        counter: counterReducer,
        login: loginReducer,
    }

    const store = configureStore({
        reducer: rootReducers,
        devTools: true,
        preloadedState: initialState
    })

    return store;
}