import { ReducersMapObject, configureStore } from "@reduxjs/toolkit";
import { RootState } from "./RootState";
import { counterReducer } from "entities/Counter";
import { loginReducer } from "features/LoginByUsername";
import { userReducer } from "entities/User";

export function createReduxStore(initialState?: RootState) {
    const rootReducers: ReducersMapObject<RootState> = {
        counter: counterReducer,
        user: userReducer,
        login: loginReducer,
    }

    const store = configureStore({
        reducer: rootReducers,
        devTools: true,
        preloadedState: initialState
    })

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];