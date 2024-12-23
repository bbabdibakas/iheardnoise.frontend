import * as styles from './AppHeader.modules.scss'
import { ReactNode } from 'react'

interface AppHeaderProps {
    children: ReactNode
    className?: string
}

const AppHeader = (props: AppHeaderProps) => {
    const {
        children,
        className
    } = props

    return (
        <div className={`${styles.AppHeader} ${className}`}>
            {children}
        </div>
    )
}

export default AppHeader