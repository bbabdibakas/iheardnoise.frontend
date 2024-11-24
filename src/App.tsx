import { Routes, Route } from "react-router-dom"
import MainPage from "./pages/MainPage"
import ProfilePage from "./pages/ProfilePage"
import Sidebar from "./components/Sidebar/Sidebar"

const App = () => {
    return (
        <div className='wrapper'>
            <Sidebar />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/profile" element={<ProfilePage />} />
            </Routes>
        </div>
    )
}

export default App