import { classNames } from 'shared/lib/classNames'
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
        <div className={classNames(cls.AppHeader, {}, [className])}>
            {children}
        </div>
    )
}

export default AppHeader