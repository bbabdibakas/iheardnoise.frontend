import { getUserData, userActions } from "entities/User"
import { AuthModal } from "features/AuthByUsername"
import { useCallback, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import AppButton, { AppButtonTheme } from "shared/ui/AppButton/AppButton"
import AppHeader from "shared/ui/AppHeader/AppHeader"

const MainPage = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    const userData = useSelector(getUserData);
    const dispatch = useDispatch();

    const onModalOpen = () => {
        setIsModalOpen(true)
    }

    const onModalClose = () => {
        setIsModalOpen(false)
    }

    const onLogout = useCallback(() => {
        dispatch(userActions.resetUserData());
    }, [dispatch]);

    if (userData) {
        return (
            <div className="content">
                <AppHeader>
                    <AppButton onClick={onLogout} theme={AppButtonTheme.PRIMARY}>
                        Logout
                    </AppButton>
                </AppHeader>
                MainPage
            </div>
        )
    }

    return (
        <div className="content">
            <AppHeader>
                <AppButton onClick={onModalOpen} theme={AppButtonTheme.PRIMARY}>
                    Login
                </AppButton>
            </AppHeader>
            MainPage
            {isModalOpen && <AuthModal isOpen={isModalOpen} onClose={onModalClose} />}
        </div>
    )
}

export default MainPage