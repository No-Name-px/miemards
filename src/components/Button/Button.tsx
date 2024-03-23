import { ButtonTypeEnum, ButtonSizeEnum } from './types';
import styles from './Buttons.module.css';
import cn from 'classnames';

interface Props {
    type?: keyof typeof ButtonTypeEnum;
    className?: string;
    size?: keyof typeof ButtonSizeEnum;
    onClick?: () => void;
    disabled?: boolean;
}

export default function Button(props: React.PropsWithChildren<Props>) {
    const {
        children,
        type = ButtonTypeEnum.default,
        className,
        onClick,
        size = ButtonSizeEnum.m,
        disabled = false,
    } = props;
    return (
        <>
            <button
                className={cn(styles.button, className, {
                    [styles.buttonDefault]: type === ButtonTypeEnum.default,
                    [styles.buttonAccent]: type === ButtonTypeEnum.accent,
                    [styles.buttonAccept]: type === ButtonTypeEnum.accept,
                    [styles.buttonCancel]: type === ButtonTypeEnum.cancel,
                    [styles.sizeM]: size === ButtonSizeEnum.m,
                    [styles.sizeS]: size === ButtonSizeEnum.s,
                })}
                onClick={onClick}
                disabled={disabled}
            >
                {children}
            </button>
        </>
    );
}
