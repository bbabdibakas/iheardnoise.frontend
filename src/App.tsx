import { Route, Routes } from "react-router-dom"
import { Link } from "react-router-dom"
import { Suspense } from "react"
import { MainPageAsync } from "./pages/MainPage.async"
import { ProfilePageAsync } from "./pages/ProfilePage.async"

const App = () => {
    return (
        <div className="wrapper">
            <Link to={'/'}>main</Link>
            <Link to={'/profile'}>profile</Link>
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