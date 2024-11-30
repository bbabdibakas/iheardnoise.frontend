import AppButton, { AppButtonTheme } from 'shared/ui/AppButton/AppButton'
import cls from './AuthForm.module.scss'
import AppInput from 'shared/ui/AppInput/AppInput'
import { useDispatch, useSelector } from 'react-redux'
import { useCallback } from 'react'
import { getAuthFormPassword } from '../../model/selectors/getAuthFormPassword'
import { authFormActions } from '../../model/slices/authFormSlice'
import { getAuthFormUsername } from '../../model/selectors/getAuthFormUsername'

const AuthForm = () => {
    const dispatch = useDispatch()
    const username = useSelector(getAuthFormUsername)
    const password = useSelector(getAuthFormPassword)

    const onChangeUsername = useCallback((value: string) => {
        dispatch(authFormActions.setUsername(value))
    }, [dispatch, username])

    const onChangePassword = useCallback((value: string) => {
        dispatch(authFormActions.setPassword(value))
    }, [dispatch, password])

    const onLogin = useCallback(() => {
        console.log({ username, password })
    }, [dispatch, username, password])

    return (
        <div className={cls.AuthForm}>
            <div className={cls.title}>
                Welcome back to iheardnoise
            </div>
            <AppInput
                value={username}
                onChange={onChangeUsername}
                placeholder="Username"
            />
            <AppInput
                value={password}
                onChange={onChangePassword}
                placeholder="Password"
            />
            <AppButton
                theme={AppButtonTheme.PRIMARY}
                className={cls.button}
                onClick={onLogin}
            >
                Login
            </AppButton>
        </div>
    )
}

export default AuthForm