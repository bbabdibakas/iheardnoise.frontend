import { useState } from "react"
import AppButton, { AppButtonTheme } from "shared/ui/AppButton/AppButton"
import AppHeader from "shared/ui/AppHeader/AppHeader"
import { AppModal } from "shared/ui/AppModal/AppModal"

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
            <AppModal isOpen={isModalOpen} onClose={onModalClose}>
                Hello, World!
            </AppModal>
            MainPage
        </div>
    )
}
export default MainPage