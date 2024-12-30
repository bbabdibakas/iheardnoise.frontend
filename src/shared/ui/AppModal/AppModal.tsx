import * as styles from './AppModal.modules.scss';
import { ReactNode } from 'react';
import { AppPortal } from 'shared/ui/AppPortal/AppPortal';
import AppHeader from 'shared/ui/AppHeader/AppHeader';
import { AppButton } from '../AppButton/AppButton';
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
            <div className={`${styles.AppModal} ${isOpen ? styles.opened : undefined} ${className}`}>
                <div className={styles.overlay}>
                    <div className={styles.content}>
                        <AppHeader>
                            <AppButton onClick={onCloseHandler} className={styles.button}>
                                <CloseIcon className={styles.icon} />
                            </AppButton>
                        </AppHeader>
                        <div className={styles.body}>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </AppPortal>
    );
};