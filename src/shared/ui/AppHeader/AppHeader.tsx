import cls from './AppHeader.module.scss'
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
        <div
            className={`${cls.AppHeader} ${className}`}
        >
            {children}
        </div>
    )
}

export default AppHeader