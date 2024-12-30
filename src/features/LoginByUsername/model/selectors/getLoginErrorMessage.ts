import { RootState } from "app/providers/StoreProvider";

export const getLoginErrorMessage = (state: RootState) => state.login?.errorMessage || undefined 