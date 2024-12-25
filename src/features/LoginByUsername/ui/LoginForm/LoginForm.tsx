import { getLoginPassword } from "../../model/selectors/getLoginPassword"
import { getLoginUsername } from "../../model/selectors/getLoginUsername"
import { loginActions } from "../../model/slice/loginSlice"
import { useDispatch, useSelector } from "react-redux"
import AppInput from "shared/ui/AppInput/AppInput"
import * as styles from './LoginForm.modules.scss'
import { getLoginIsLoading } from "../../model/selectors/getLoginIsLoading"
import { getLoginErrorMessage } from "../../model/selectors/getLoginErrorMessage"
import { AppButton, AppButtonTheme } from "shared/ui/AppButton/AppButton"
import { loginByUsername } from "../../model/services/loginByUsername"
import { AppDispatch } from "app/providers/StoreProvider"
import AppPageLoader from "shared/ui/AppPageLoader/AppPageLoader"

const LoginForm = () => {
    const dispatch = useDispatch<AppDispatch>()
    const username = useSelector(getLoginUsername)
    const password = useSelector(getLoginPassword)
    const isLoading = useSelector(getLoginIsLoading)
    const errorMessage = useSelector(getLoginErrorMessage)

    const onChangeUsername = (value: string) => {
        dispatch(loginActions.setUsername(value))
    }

    const onChangePassword = (value: string) => {
        dispatch(loginActions.setPassword(value))
    }

    const onLogin = () => {
        dispatch(loginByUsername({ username, password }))
    }

    let content

    if (isLoading) {
        content = (
            <div className={styles.LoginForm}>
                <AppPageLoader />
            </div>
        )
    } else {
        content = (
            <div className={styles.LoginForm}>
                {errorMessage}
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
                >
                    Login
                </AppButton>
            </div>
        )
    }

    return content
}

export default LoginForm