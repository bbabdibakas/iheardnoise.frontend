import { ChangeEvent, InputHTMLAttributes } from "react"
import * as styles from './AppInput.modules.scss'

interface AppInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> {
    className?: string
    value: string
    onChange: (value: string) => void
}

const AppInput = (props: AppInputProps) => {
    const {
        children,
        className,
        placeholder,
        value,
        onChange,
        ...otherProps
    } = props


    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value)
    }

    return (
        <div className={styles.wrapper}>
            <input
                className={`${styles.AppInput} ${className}`}
                value={value}
                onChange={onChangeHandler}
                placeholder={placeholder}
                {...otherProps}
            ></input>
            <div className={styles.placeholder}>
                {placeholder}
            </div>
        </div>
    )
}

export default AppInput