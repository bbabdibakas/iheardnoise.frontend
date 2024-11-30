import { ChangeEvent, InputHTMLAttributes } from "react"
import cls from './AppInput.module.scss'

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
        <div className={cls.wrapper}>
            <input
                className={`${cls.AppInput} ${className}`}
                value={value}
                onChange={onChangeHandler}
                placeholder={placeholder}
                {...otherProps}
            ></input>
            <div className={cls.placeholder}>
                {placeholder}
            </div>
        </div>
    )
}

export default AppInput