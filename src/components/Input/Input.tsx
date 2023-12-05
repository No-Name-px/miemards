import {
    ChangeEvent,
    HTMLInputTypeAttribute,
    InputHTMLAttributes,
    useCallback,
    useState,
} from 'react';
import styles from './Input.module.css';
import cn from 'classnames';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    id: string;
    type?: HTMLInputTypeAttribute;
    label: string;
}

export default function Input(props: Props) {
    const { onChange, type = 'text', id, label, value } = props;
    const [isActive, setIsActive] = useState(value && value !== '');

    const handleChangeValue = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            if (onChange) onChange(e);
            setIsActive(e.target.value !== '');
        },
        [onChange, setIsActive]
    );

    return (
        <>
            <div
                className={cn(styles.container, {
                    [styles.active]: isActive,
                })}
            >
                <input
                    value={value}
                    className={styles.input}
                    type={type}
                    id={id}
                    onChange={handleChangeValue}
                />

                <label className={styles.label} htmlFor={id}>
                    {label}
                </label>
            </div>
        </>
    );
}
