import { useState } from "react"
import AppButton, { AppButtonTheme } from "shared/ui/AppButton/AppButton"
import AppHeader from "shared/ui/AppHeader/AppHeader"
import AppInput from "shared/ui/AppInput/AppInput"
import { AppModal } from "shared/ui/AppModal/AppModal"

const MainPage = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    const [username, setUsername] = useState<string>('')

    const onModalOpen = () => {
        setIsModalOpen(true)
    }

    const onModalClose = () => {
        setIsModalOpen(false)
    }

    const onSetUsername = (value: string) => {
        setUsername(value)
    }

    return (
        <div className="content">
            <AppHeader>
                <AppButton onClick={onModalOpen} theme={AppButtonTheme.PRIMARY}>
                    Login
                </AppButton>
            </AppHeader>
            MainPage
            <AppModal isOpen={isModalOpen} onClose={onModalClose}>
                <AppInput value={username} onChange={onSetUsername} placeholder="Username"/>
            </AppModal>
        </div>
    )
}

export default MainPage