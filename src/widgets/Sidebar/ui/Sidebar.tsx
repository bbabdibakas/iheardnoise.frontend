import AppLink from 'shared/ui/AppLink/AppLink'
import cls from './Sidebar.module.scss'
import MainPageIcon from 'shared/assets/icons/MainPage.svg'
import MainPageActiveIcon from 'shared/assets/icons/MainPageActive.svg'
import ProfilePageIcon from 'shared/assets/icons/ProfilePage.svg'
import ProfilePageActiveIcon from 'shared/assets/icons/ProfilePageActive.svg'
import { useLocation } from 'react-router-dom'

const Sidebar = () => {

    const location = useLocation()

    return (
        <div className={cls.Sidebar}>
            <AppLink to="/" className={cls.link}>
                {location.pathname === "/" ? <MainPageActiveIcon className={cls.icon} /> : <MainPageIcon className={cls.icon} />}
                <div className={location.pathname === "/" ? cls.label : undefined}>
                    Main
                </div>
            </AppLink>
            <AppLink to="/profile" className={cls.link}>
                {location.pathname === "/profile" ? <ProfilePageActiveIcon className={cls.icon} /> : <ProfilePageIcon className={cls.icon} />}
                <div className={location.pathname === "/profile" ? cls.label : undefined}>
                    Profile
                </div>
            </AppLink>
        </div>
    )
}
export default Sidebar