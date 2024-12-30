import { getLoginPassword } from "../../model/selectors/getLoginPassword"
import { getLoginUsername } from "../../model/selectors/getLoginUsername"
import { loginActions, loginReducer } from "../../model/slice/loginSlice"
import { useSelector } from "react-redux"
import AppInput from "shared/ui/AppInput/AppInput"
import * as styles from './LoginForm.modules.scss'
import { getLoginIsLoading } from "../../model/selectors/getLoginIsLoading"
import { getLoginErrorMessage } from "../../model/selectors/getLoginErrorMessage"
import { AppButton, AppButtonTheme } from "shared/ui/AppButton/AppButton"
import { loginByUsername } from "../../model/services/loginByUsername"
import AppPageLoader from "shared/ui/AppPageLoader/AppPageLoader"
import { useAppDispatch } from "shared/lib/useAppDispatch/useAppDispatch"
import { useCallback } from "react"
import { DynamicModuleLoader, ReducersList } from "shared/lib/DynamicModuleLoader/DynamicModuleLoader"

const initialReducers: ReducersList = {
    login: loginReducer
}

export interface LoginFormProps {
    onSuccess: () => void
}

const LoginForm = ({ onSuccess }: LoginFormProps) => {
    const dispatch = useAppDispatch()
    const username = useSelector(getLoginUsername)
    const password = useSelector(getLoginPassword)
    const isLoading = useSelector(getLoginIsLoading)
    const errorMessage = useSelector(getLoginErrorMessage)

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value))
    }, [dispatch])

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value))
    }, [dispatch])

    const onLogin = useCallback(async () => {
        const result = await dispatch(loginByUsername({ username, password }))
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess()
        }
    }, [dispatch, username, password, onSuccess])

    return (
        <DynamicModuleLoader
            removeAfterUnmount
            reducers={initialReducers}
        >

            <div className={styles.LoginForm}>
                {errorMessage}
                <div>
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
                    onClick={onLogin}
                    theme={AppButtonTheme.PRIMARY}
                    className={styles.button}
                >
                    Login
                </AppButton>
            </div>
        </DynamicModuleLoader>
    )
}

export default LoginForm