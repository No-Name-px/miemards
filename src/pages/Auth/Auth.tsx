import { NavLink } from 'react-router-dom';
import Logo from '../../assets/pics/logo.svg?react';
import Button from '../../components/Button';
import Container from '../../components/Container';
import styles from './Auth.module.css';
import bgPath from '../../assets/pics/main-bg.svg';

export default function AuthPage() {
    return (
        <div className={styles.wrapper}>
            <div
                className={styles.content}
                style={{
                    backgroundImage: `url(${bgPath})`,
                }}
            >
                <Container className={styles.logoContainer}>
                    <Logo fill="var(--accent-1)"></Logo>
                </Container>
            </div>
            <div className={styles.buttons}>
                <Container className={styles.buttonsContainer}>
                    <NavLink className={styles.link} to="register">
                        <Button type="accent">Регистрация</Button>
                    </NavLink>
                    <NavLink className={styles.link} to="login">
                        <Button>Вход</Button>
                    </NavLink>
                </Container>
            </div>
        </div>
    );
}
