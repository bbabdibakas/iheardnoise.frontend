import { getLoginPassword } from "../../model/selectors/getLoginPassword"
import { getLoginUsername } from "../../model/selectors/getLoginUsername"
import { loginActions } from "../../model/slice/loginSlice"
import { useDispatch, useSelector } from "react-redux"
import AppInput from "shared/ui/AppInput/AppInput"
import * as styles from './LoginForm.modules.scss'

const LoginForm = () => {
    const dispatch = useDispatch()
    const username = useSelector(getLoginUsername)
    const password = useSelector(getLoginPassword)

    const onChangeUsername = (value: string) => {
        dispatch(loginActions.setUsername(value))
    }

    const onChangePassword = (value: string) => {
        dispatch(loginActions.setPassword(value))
    }

    return (
        <div className={styles.LoginForm}>
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
        </div>
    )
}

export default LoginForm