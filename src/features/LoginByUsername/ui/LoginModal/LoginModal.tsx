import { AppModal } from "shared/ui/AppModal/AppModal";
import LoginForm from "../LoginForm/LoginForm";

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
            <LoginForm onSuccess={onClose}/>
        </AppModal>
    )
}

export default LoginModal