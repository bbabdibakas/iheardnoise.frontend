import { ButtonHTMLAttributes } from "react"
import * as styles from './AppButton.modules.scss'

export enum AppButtonTheme {
    CLEAR = 'clear',
    PRIMARY = 'primary',
}

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: AppButtonTheme
}

export const AppButton = (props: AppButtonProps) => {
    const {
        children,
        className,
        theme = AppButtonTheme.CLEAR,
        ...otherProps
    } = props

    return (
        <button
            type="button"
            className={`${styles.AppButton} ${styles[theme]} ${className}`}
            {...otherProps}
        >
            ProfilePage
        </button>
    )
}