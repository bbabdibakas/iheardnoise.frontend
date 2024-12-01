import { Link, LinkProps } from 'react-router-dom'
import cls from './AppLink.module.scss'
import { classNames } from 'shared/lib/classNames'

interface AppLinkProps extends LinkProps {
    className?: string
}

const AppLink = (props: AppLinkProps) => {
    const {
        to,
        children,
        className
    } = props

    return (
        <Link
            to={to}
            className={classNames(cls.AppLink, {}, [className])}

        >
            {children}
        </Link>
    )
}

export default AppLink