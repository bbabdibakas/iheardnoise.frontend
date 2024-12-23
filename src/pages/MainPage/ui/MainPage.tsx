import { Counter } from "entity/Counter"
import { useState } from "react"
import { AppButton, AppButtonTheme } from "shared/ui/AppButton/AppButton"
import AppHeader from "shared/ui/AppHeader/AppHeader"
import AppInput from "shared/ui/AppInput/AppInput"
import { AppModal } from "shared/ui/AppModal/AppModal"

const MainPage = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const onModalOpen = () => {
        setIsModalOpen(true)
    }

    const onModalClose = () => {
        setIsModalOpen(false)
    }

    const onChangeUsername = (value: string) => {
        setUsername(value)
    }

    const onChangePassword = (value: string) => {
        setPassword(value)
    }

    return (
        <div>
            <AppHeader>
                <AppButton theme={AppButtonTheme.PRIMARY} onClick={onModalOpen}>
                    Login
                </AppButton>
            </AppHeader>
            <AppModal isOpen={isModalOpen} onClose={onModalClose}>
                <AppInput value={username} placeholder="username" onChange={onChangeUsername} />
                <AppInput value={password} placeholder="password" onChange={onChangePassword} />
            </AppModal>
            MainPage
            <Counter />
        </div>
    )
}

export default MainPage