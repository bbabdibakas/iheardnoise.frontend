import AppButton, { AppButtonTheme } from 'shared/ui/AppButton/AppButton'
import cls from './AuthForm.module.scss'
import AppInput from 'shared/ui/AppInput/AppInput'
import { useSelector } from 'react-redux'
import { useCallback } from 'react'
import { getAuthFormPassword } from '../../model/selectors/getAuthFormPassword'
import { authFormActions, authFormReducer } from '../../model/slices/authFormSlice'
import { getAuthFormUsername } from '../../model/selectors/getAuthFormUsername'
import { getAuthFormIsLoading } from '../../model/selectors/getAuthFormIsLoading'
import { getAuthFormIsErrorMessage } from '../../model/selectors/getAuthFormIsErrorMessage'
import { authByUsername } from '../../model/services/authByUsername'
import { useAppDispatch } from 'shared/lib/useAppDispatch'
import AppLoader from 'shared/ui/AppLoader/AppLoader'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader'

const initialReducers: ReducersList = {
    authForm: authFormReducer
}

export interface AuthFormProps {
    onSuccess: () => void
}

const AuthForm = ({ onSuccess }: AuthFormProps) => {
    const dispatch = useAppDispatch()
    const username = useSelector(getAuthFormUsername)
    const password = useSelector(getAuthFormPassword)
    const isLoading = useSelector(getAuthFormIsLoading)
    const isErrorMessage = useSelector(getAuthFormIsErrorMessage)

    const onChangeUsername = useCallback((value: string) => {
        dispatch(authFormActions.setUsername(value))
    }, [dispatch, username])

    const onChangePassword = useCallback((value: string) => {
        dispatch(authFormActions.setPassword(value))
    }, [dispatch, password])

    const onLogin = useCallback(async () => {
        const result = await dispatch(authByUsername({ username, password }))
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess();
        }
    }, [dispatch, username, password])

    return (
        <DynamicModuleLoader
            removeAfterUnmount
            reducers={initialReducers}
        >
            <div className={cls.AuthForm}>
                <div className={cls.title}>
                    Welcome back to iheardnoise
                </div>
                <div className={cls.isErrorMessage}>
                    {isErrorMessage}
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
                    {isLoading && <AppLoader className={cls.spinner} />}
                </AppButton>
            </div>
        </DynamicModuleLoader>
    )
}

export default AuthForm