import { RootState } from "app/providers/StoreProvider";

export const getAuthFormIsErrorMessage = (state: RootState) => state.authForm.isErrorMessage