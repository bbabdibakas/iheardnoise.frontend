import { Route, Routes } from "react-router-dom"
import { Suspense } from "react"
import { MainPageAsync } from "./pages/MainPage.async"
import { ProfilePageAsync } from "./pages/ProfilePage.async"
import Sidebar from "./components/Sidebar/Sidebar"

const App = () => {
    return (
        <div className="wrapper">
            <Sidebar />
            <Suspense fallback={'Loading...'}>
                <Routes>
                    <Route path="/" element={<MainPageAsync />} />
                    <Route path="/profile" element={<ProfilePageAsync />} />
                </Routes>
            </Suspense>
        </div>
    )
}

export default App