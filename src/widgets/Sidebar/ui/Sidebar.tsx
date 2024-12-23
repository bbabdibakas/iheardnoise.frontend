import AppLink from 'shared/ui/AppLink/AppLink'
import * as styles from './Sidebar.modules.scss'

const Sidebar = () => {
    return (
        <div className={styles.Sidebar}>
            <AppLink to={'/'} className={styles.link}>main</AppLink>
            <AppLink to={'/profile'} className={styles.link}>profile</AppLink>
        </div>
    )
}

export default Sidebar