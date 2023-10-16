import { HTMLInputTypeAttribute, useCallback, useState } from 'react';
import styles from './Input.module.css';
import cn from 'classnames';

interface Props {
    onChange: (newValue: string) => void;
    id: string;
    type?: HTMLInputTypeAttribute;
    label: string;
}

export default function Input(props: Props) {
    const { onChange, type = 'text', id, label } = props;
    const [isActive, setIsActive] = useState(false);

    const handleChangeValue = useCallback(
        (newValue: string) => {
            onChange(newValue);
            setIsActive(newValue !== '');
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
                    className={styles.input}
                    type={type}
                    id={id}
                    onChange={(e) => handleChangeValue(e.target.value)}
                />

                <label className={styles.label} htmlFor={id}>
                    {label}
                </label>
            </div>
        </>
    );
}
