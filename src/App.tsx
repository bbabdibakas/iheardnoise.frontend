import { Link, Route, Routes } from 'react-router'
import * as styles from './App.modules.scss'
import MainPage from './pages/MainPage'
import ProfilePage from './pages/ProfilePage'

const App = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.sidebar}>
                <Link to={'/'}>main</Link>
                <Link to={'/profile'}>profile</Link>
            </div>
            <div className={styles.page}>
                <Routes>
                    <Route path='/' element={<MainPage />} />
                    <Route path='/profile' element={<ProfilePage />} />
                </Routes>
            </div>
        </div>
    )
}

export default App