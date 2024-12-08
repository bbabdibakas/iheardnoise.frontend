import cls from './AppButton.module.scss'
import { ButtonHTMLAttributes } from 'react'

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
}

const AppButton = (props: AppButtonProps) => {
    const {
        children,
        className,
        ...otherProps
    } = props

    return (
        <button
            type="button"
            className={`${cls.AppButton} ${className}`}
            {...otherProps}
        >
            {children}
        </button>
    )
}

export default AppButton