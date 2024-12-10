import { RootState } from "app/providers/StoreProvider";

export const getAuthFormIsLoading = (state: RootState) => state.authForm.isLoading