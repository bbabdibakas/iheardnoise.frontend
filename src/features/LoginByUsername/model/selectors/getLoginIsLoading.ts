import { RootState } from "app/providers/StoreProvider";

export const getLoginIsLoading = (state: RootState) => state.login.isLoading