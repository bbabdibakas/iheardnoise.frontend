import * as styles from './AppLoader.modules.scss'

interface AppLoaderProps {
    className?: string
}

const AppLoader = (props: AppLoaderProps) => {
    const {
        className
    } = props

    return (
        <div className={`${styles.AppLoader} ${className}`} />
    )
}

export default AppLoader