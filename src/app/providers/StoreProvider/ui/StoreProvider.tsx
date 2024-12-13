import { ReactNode } from "react";
import { Provider } from "react-redux";
import { createReduxStore } from "../lib/store";
import { RootState } from "../lib/RootState";
import { ReducersMapObject } from "@reduxjs/toolkit";

interface StoreProviderProps {
    children?: ReactNode;
    initialState?: RootState;
    asyncReducers?: ReducersMapObject<RootState>
}

const StoreProvider = (props: StoreProviderProps) => {
    const {
        children,
        initialState,
        asyncReducers
    } = props;
    
    const store = createReduxStore(
        initialState as RootState,
        asyncReducers as ReducersMapObject<RootState>
    );

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

export default StoreProvider