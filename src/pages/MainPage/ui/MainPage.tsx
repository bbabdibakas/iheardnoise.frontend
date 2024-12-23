import { useState } from "react"
import { AppButton, AppButtonTheme } from "shared/ui/AppButton/AppButton"
import AppHeader from "shared/ui/AppHeader/AppHeader"
import { AppModal } from "shared/ui/AppModal/AppModal"

const MainPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)

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
            <AppModal isOpen={isModalOpen} onClose={onModalClose}>
                Hello, World!
            </AppModal>
            MainPage
        </div>
    )
}

export default MainPage