import { RootState } from "app/providers/StoreProvider";

export const getCounterValue = (state: RootState) => state.counter.value