import AppLink from 'shared/ui/AppLink/AppLink'
import * as styles from './Sidebar.modules.scss'
import { useLocation } from 'react-router'
import MainPageIcon from 'shared/assets/icons/MainPage.svg'
import MainPageActiveIcon from 'shared/assets/icons/MainPageActive.svg'
import ProfilePageIcon from 'shared/assets/icons/ProfilePage.svg'
import ProfilePageActiveIcon from 'shared/assets/icons/ProfilePageActive.svg'
import { RoutePath } from 'app/providers/AppRouter'

const Sidebar = () => {
    const location = useLocation()

    return (
        <div className={styles.Sidebar}>
            <AppLink to={RoutePath.main} className={styles.link}>
                {location.pathname === RoutePath.main ? <MainPageActiveIcon className={styles.icon} /> : <MainPageIcon className={styles.icon} />}
                <div>
                    Main
                </div>
            </AppLink>
            <AppLink to={RoutePath.profile} className={styles.link}>
                {location.pathname === RoutePath.profile ? <ProfilePageActiveIcon className={styles.icon} /> : <ProfilePageIcon className={styles.icon} />}
                <div>
                    Profile
                </div>
            </AppLink>
        </div>
    )
}

export default Sidebar