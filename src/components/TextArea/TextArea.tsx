import { useCallback, useEffect, useState } from 'react';
import styles from './TextArea.module.css';
import cn from 'classnames';

interface Props {
    onChange: (newValue: string) => void;
    id: string;
    label: string;
    rows?: number;
    value?: string;
}

export default function TextArea(props: Props) {
    const { onChange, id, label, rows = 1, value } = props;
    const [isActive, setIsActive] = useState(value && value !== '');

    const handleChangeValue = useCallback(
        (newValue: string) => {
            onChange(newValue);
            setIsActive(newValue !== '');
        },
        [onChange, setIsActive]
    );

    useEffect(() => {
        if (value) setIsActive(value !== '');
    }, [value]);

    return (
        <>
            <div
                className={cn(styles.container, {
                    [styles.active]: isActive,
                })}
            >
                <textarea
                    value={value}
                    className={styles.textarea}
                    id={id}
                    onChange={(e) => handleChangeValue(e.target.value)}
                    rows={rows}
                />

                <label className={styles.label} htmlFor={id}>
                    {label}
                </label>
            </div>
        </>
    );
}
