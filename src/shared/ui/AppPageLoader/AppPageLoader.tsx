import AppLoader from '../AppLoader/AppLoader'
import * as styles from './AppPageLoader.modules.scss'

interface AppPageLoaderProps {
    className?: string
}

const AppPageLoader = (props: AppPageLoaderProps) => {
    const {
        className
    } = props

    return (
        <div className={`${styles.AppPageLoader} ${className}`} >
            <AppLoader />
        </div>
    )
}

export default AppPageLoader