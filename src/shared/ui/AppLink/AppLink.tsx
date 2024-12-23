import { Link, LinkProps } from 'react-router'
import * as styles from './AppLink.modules.scss'

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
            className={`${styles.AppLink} ${className}`}
        >
            {children}
        </Link>
    )
}

export default AppLink