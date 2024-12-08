import { lazy } from "react";

export const MainPageAsync = lazy(() => new Promise(resolve => {
    // @ts-ignore
    // to simulate delay
    setTimeout(() => resolve(import('./MainPage')), 1500)
}));
