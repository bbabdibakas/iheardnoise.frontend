import AppLoader from '../AppLoader/AppLoader'
import cls from './AppPageLoader.module.scss'

interface AppPageLoaderProps {
    className?: string
}

const AppPageLoader = (props: AppPageLoaderProps) => {
    const {
        className
    } = props

    return (
        <div className={`${cls.AppPageLoader} ${className}`} >
            <AppLoader />
        </div>
    )
}

export default AppPageLoader