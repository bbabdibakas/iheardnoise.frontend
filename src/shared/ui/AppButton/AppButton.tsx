import { classNames } from 'shared/lib/classNames'
import cls from './AppButton.module.scss'
import { ButtonHTMLAttributes } from 'react'

export enum AppButtonTheme {
    CLEAR = 'clear',
    PRIMARY = 'primary',
}

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: AppButtonTheme
}

const AppButton = (props: AppButtonProps) => {
    const {
        children,
        className,
        theme = AppButtonTheme.CLEAR,
        ...otherProps
    } = props

    return (
        <button
            type="button"
            className={classNames(cls.AppButton, {}, [cls[theme], className])}
            {...otherProps}
        >
            {children}
        </button>
    )
}

export default AppButton