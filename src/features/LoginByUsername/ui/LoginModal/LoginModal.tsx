import { AppModal } from "shared/ui/AppModal/AppModal";
import { Suspense } from "react";
import { LoginFormAsync } from "../LoginForm/LoginForm.async";
import AppPageLoader from "shared/ui/AppPageLoader/AppPageLoader";

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const LoginModal = (props: LoginModalProps) => {
    const {
        isOpen,
        onClose,
    } = props;

    return (
        <AppModal isOpen={isOpen} onClose={onClose}>
            <Suspense fallback={<AppPageLoader />}>
                <LoginFormAsync onSuccess={onClose}/>
            </Suspense>
        </AppModal>
    )
}

export default LoginModal