import { Route, Routes, useLocation } from 'react-router'
import { MainPage } from 'pages/MainPage'
import { ProfilePage } from 'pages/ProfilePage'
import { Suspense } from 'react'
import AppPageLoader from 'shared/ui/AppPageLoader/AppPageLoader'
import { Sidebar } from 'widgets/Sidebar'

const App = () => {
    const location = useLocation()

    return (
        <div className={'wrapper'}>
            <div className={'page'}>
                <Sidebar />
                <div className={'content'}>
                    <Suspense fallback={<AppPageLoader />} key={location.key}>
                        <Routes>
                            <Route path='/' element={<MainPage />} />
                            <Route path='/profile' element={<ProfilePage />} />
                        </Routes>
                    </Suspense>
                </div>
            </div>
        </div>
    )
}

export default App