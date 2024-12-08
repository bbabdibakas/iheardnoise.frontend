import { useState } from "react"
import AppButton from "shared/ui/AppButton/AppButton"
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
        <div className="content">
            <AppHeader>
                <AppButton onClick={onModalOpen}>
                    Login
                </AppButton>
            </AppHeader>
            MainPage
            <AppModal isOpen={isModalOpen} onClose={onModalClose}>
                Hello, World
            </AppModal>
        </div>
    )
}

export default MainPage