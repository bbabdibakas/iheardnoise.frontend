import cls from './AppLoader.module.scss'

interface AppLoaderProps {
    className?: string
}

const AppLoader = (props: AppLoaderProps) => {
    const {
        className
    } = props

    return (
        <div className={`${cls.AppLoader} ${className}`} />
    )
}

export default AppLoader