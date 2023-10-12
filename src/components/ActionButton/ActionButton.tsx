import { useState } from 'react';
import styles from './ActionButton.module.css';

export default function ActionButton() {
    const [title, setTitle] = useState('Add desk');
    return (
        <div className={styles.button}>
            <div>+</div>
            <p className={styles.title}>{title}</p>
        </div>
    );
}
