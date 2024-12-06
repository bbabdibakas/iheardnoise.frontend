import AppLoader from 'shared/ui/AppLoader/AppLoader'
import cls from './AppPageLoader.module.scss'
import { classNames } from 'shared/lib/classNames'

interface AppPageLoaderProps {
    className?: string
}

const AppPageLoader = (props: AppPageLoaderProps) => {
    const {
        className
    } = props

    return (
        <div className={classNames(cls.AppPageLoader, {}, [className])}>
            <AppLoader />
        </div>
    )
}

export default AppPageLoader