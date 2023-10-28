import { NavLink } from 'react-router-dom';
import Button from '../../components/Button';
import Container from '../../components/Container';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Page from '../../components/Page';
import styles from './Login.module.css';

export default function LoginPage() {
    return (
        <>
            <Container>
                <Page>
                    <Header hasBack>Вход</Header>
                    <div className={styles.content}>
                        <Input
                            onChange={() => {}}
                            id="email"
                            label="Почта"
                            type="text"
                        ></Input>
                        <Input
                            onChange={() => {}}
                            id="password"
                            label="Пароль"
                            type="password"
                        ></Input>
                        <NavLink className={styles.buttonLink} to="/">
                            <Button type="accent">Войти</Button>
                        </NavLink>
                    </div>
                </Page>
            </Container>
        </>
    );
}
