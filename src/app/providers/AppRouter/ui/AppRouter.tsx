import { Route, Routes } from "react-router";
import { routeConfig } from "../lib/routeConfig";
import { Suspense } from "react";
import AppPageLoader from "shared/ui/AppPageLoader/AppPageLoader";

const AppRouter = () => {
    return (
        <Routes>
            {Object.values(routeConfig).map(({ element, path }) => (
                <Route
                    key={path}
                    path={path}
                    element={(
                        <Suspense fallback={<AppPageLoader />} key={path}>
                            <div className="content">
                                {element}
                            </div>
                        </Suspense>
                    )}
                />
            ))}
        </Routes>
    )
}

export default AppRouter;