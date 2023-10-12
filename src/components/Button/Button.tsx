import { ButtonTypeEnum } from '../../types/ui.d';
import styles from './Buttons.module.css';
import cn from 'classnames';

interface Props {
    type?: keyof typeof ButtonTypeEnum;
}

export default function Button(props: React.PropsWithChildren<Props>) {
    const { children, type = ButtonTypeEnum.default } = props;
    return (
        <>
            <button
                className={cn(styles.button, {
                    [styles.buttonDefault]: type === ButtonTypeEnum.default,
                    [styles.buttonAccent]: type === ButtonTypeEnum.accent,
                })}
            >
                {children}
            </button>
        </>
    );
}
