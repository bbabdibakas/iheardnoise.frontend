import { AuthModal } from "features/AuthByUsername"
import { useState } from "react"
import AppButton, { AppButtonTheme } from "shared/ui/AppButton/AppButton"
import AppHeader from "shared/ui/AppHeader/AppHeader"

const MainPage = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

    const onModalOpen = () => {
        setIsModalOpen(true)
    }

    const onModalClose = () => {
        setIsModalOpen(false)
    }

    return (
        <div>
            <AppHeader>
                <AppButton onClick={onModalOpen} theme={AppButtonTheme.PRIMARY}>
                    Login
                </AppButton>
            </AppHeader>
            <AuthModal isOpen={isModalOpen} onClose={onModalClose} />
            MainPage
        </div>
    )
}
export default MainPage