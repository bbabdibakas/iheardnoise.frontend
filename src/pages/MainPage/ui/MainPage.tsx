import { Counter } from "entities/Counter"
import { getUserData, userActions } from "entities/User"
import { LoginModal } from "features/LoginByUsername"
import { useCallback, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AppButton, AppButtonTheme } from "shared/ui/AppButton/AppButton"
import AppHeader from "shared/ui/AppHeader/AppHeader"

const MainPage = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    const userData = useSelector(getUserData)
    const dispatch = useDispatch()

    const onModalOpen = () => {
        setIsModalOpen(true)
    }

    const onModalClose = () => {
        setIsModalOpen(false)
    }

    const onLogout = useCallback(() => {
        dispatch(userActions.resetUserData())
    }, [dispatch])

    if (userData) {
        return (
            <div>
                <AppHeader>
                    <AppButton theme={AppButtonTheme.PRIMARY} onClick={onLogout}>
                        Logout
                    </AppButton>
                </AppHeader>
                MainPage
                <Counter />
            </div>
        )
    }
    
    return (
        <div>
            <AppHeader>
                <AppButton theme={AppButtonTheme.PRIMARY} onClick={onModalOpen}>
                    Login
                </AppButton>
            </AppHeader>
            {isModalOpen && <LoginModal isOpen={isModalOpen} onClose={onModalClose} />}
            MainPage
            <Counter />
        </div>
    )
}

export default MainPage