import { RootState } from "app/providers/StoreProvider";

export const getLoginPassword = (state: RootState) => state.login?.password || ''