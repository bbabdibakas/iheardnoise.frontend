import { Counter } from "entities/Counter"
import { LoginModal } from "features/LoginByUsername"
import { useState } from "react"
import { AppButton, AppButtonTheme } from "shared/ui/AppButton/AppButton"
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
                <AppButton theme={AppButtonTheme.PRIMARY} onClick={onModalOpen}>
                    Login
                </AppButton>
            </AppHeader>
            <LoginModal isOpen={isModalOpen} onClose={onModalClose} />
            MainPage
            <Counter />
        </div>
    )
}

export default MainPage