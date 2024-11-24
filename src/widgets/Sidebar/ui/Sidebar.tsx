import AppLink from 'shared/ui/AppLink/AppLink'
import cls from './Sidebar.module.scss'

const Sidebar = () => {
    return (
        <div className={cls.Sidebar}>
            <AppLink to="/" className={cls.link}>Main</AppLink>
            <AppLink to="/profile" className={cls.link}>Profile</AppLink>
        </div>
    )
}
export default Sidebar