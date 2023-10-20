import { ButtonTypeEnum } from '../../types/ui';
import styles from './Buttons.module.css';
import cn from 'classnames';

interface Props {
    type?: keyof typeof ButtonTypeEnum;
    className?: string;
    onClick?: () => void;
}

export default function Button(props: React.PropsWithChildren<Props>) {
    const {
        children,
        type = ButtonTypeEnum.default,
        className,
        onClick,
    } = props;
    return (
        <>
            <button
                className={cn(styles.button, className, {
                    [styles.buttonDefault]: type === ButtonTypeEnum.default,
                    [styles.buttonAccent]: type === ButtonTypeEnum.accent,
                })}
                onClick={onClick}
            >
                {children}
            </button>
        </>
    );
}
