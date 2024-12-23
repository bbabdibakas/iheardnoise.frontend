import { ReactNode } from "react";
import { Provider } from "react-redux";
import { createReduxStore } from "../lib/store";
import { RootState } from "../lib/RootState";

interface StoreProviderProps {
    children?: ReactNode;
    initialState?: RootState;
}

const StoreProvider = (props: StoreProviderProps) => {
    const {
        children,
        initialState,
    } = props;

    const store = createReduxStore(
        initialState as RootState,
    );

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

export default StoreProvider