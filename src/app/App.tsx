import { Routes, Route } from "react-router-dom"
import { MainPage } from "pages/MainPage"
import { ProfilePage } from "pages/ProfilePage"
import { Sidebar } from "widgets/Sidebar"
import { Suspense, useEffect } from "react"
import { useDispatch } from "react-redux"
import { userActions } from "entities/User"
import AppPageLoader from "shared/ui/AppPageLoader/AppPageLoader"

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.initAuthData())
    }, [dispatch])

    return (
        <div className='wrapper'>
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