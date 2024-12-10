import { AppModal } from "shared/ui/AppModal/AppModal"
import AuthForm from "../AuthForm/AuthForm"

interface AuthModalProps {
    isOpen: boolean
    onClose: () => void
}

const AuthModal = (props: AuthModalProps) => {
    const {
        isOpen,
        onClose
    } = props
    return (
        <AppModal isOpen={isOpen} onClose={onClose}>
            <AuthForm onSuccess={onClose}  />
        </AppModal>
    )
}

export default AuthModal