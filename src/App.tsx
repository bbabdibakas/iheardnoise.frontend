import { Link, Routes, Route } from "react-router-dom"
import MainPage from "./pages/MainPage"
import ProfilePage from "./pages/ProfilePage"

const App = () => {
    return (
        <div className='wrapper'>
            <Link to="/">Main</Link>
            <Link to="/profile">Profile</Link>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/profile" element={<ProfilePage />} />
            </Routes>
        </div>
    )
}

export default App