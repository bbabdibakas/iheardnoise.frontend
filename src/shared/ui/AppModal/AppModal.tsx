import cls from './AppModal.module.scss';
import { ReactNode } from 'react';
import { AppPortal } from 'shared/ui/AppPortal/AppPortal';
import AppHeader from 'shared/ui/AppHeader/AppHeader';
import AppButton from 'shared/ui/AppButton/AppButton';
import CloseIcon from 'shared/assets/icons/Close.svg'

interface AppModalProps {
    className?: string;
    children?: ReactNode;
    isOpen: boolean;
    onClose: () => void;
}

export const AppModal = (props: AppModalProps) => {
    const {
        className,
        children,
        isOpen,
        onClose,
    } = props;

    const onCloseHandler = () => {
        onClose()
    }

    return (
        <AppPortal>
            <div className={`${cls.AppModal} ${isOpen ? cls.opened : undefined} ${className}`}>
                <div className={cls.overlay}>
                    <div className={cls.content}>
                        <AppHeader>
                            <AppButton onClick={onCloseHandler} className={cls.button}>
                                <CloseIcon className={cls.icon}/>
                            </AppButton>
                        </AppHeader>
                        <div className={cls.body}>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </AppPortal>
    );
};