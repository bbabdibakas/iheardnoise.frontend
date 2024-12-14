import { AppModal } from "shared/ui/AppModal/AppModal"
import { Suspense } from "react"
import AppPageLoader from "shared/ui/AppPageLoader/AppPageLoader"
import { AuthFormAsync } from "../AuthForm/AuthForm.async"

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
            <Suspense fallback={<AppPageLoader />}>
                <AuthFormAsync onSuccess={onClose} />
            </Suspense>
        </AppModal>
    )
}

export default AuthModal