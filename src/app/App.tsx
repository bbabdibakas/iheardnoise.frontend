import { Route, Routes } from "react-router-dom"
import { Suspense } from "react"
import { MainPage } from "pages/MainPage"
import { ProfilePage } from "pages/ProfilePage"
import { Sidebar } from "widgets/Sidebar"
import AppPageLoader from "shared/ui/AppPageLoader/AppPageLoader"

const App = () => {
    return (
        <div className="wrapper">
            <Sidebar />
            <Suspense fallback={<AppPageLoader />}>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                </Routes>
            </Suspense>
        </div>
    )
}

export default App