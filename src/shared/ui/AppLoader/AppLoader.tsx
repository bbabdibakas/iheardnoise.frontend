import cls from './AppLoader.module.scss'
import { classNames } from 'shared/lib/classNames'

interface AppLoaderProps {
    className?: string
}

const AppLoader = (props: AppLoaderProps) => {
    const {
        className
    } = props

    return (
        <div className={classNames(cls.AppLoader, {}, [className])} />
    )
}

export default AppLoader