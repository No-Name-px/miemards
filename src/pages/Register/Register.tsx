import { NavLink } from 'react-router-dom';
import Button from 'components/Button';
import Container from 'components/Container';
import Header from 'components/Header';
import Input from 'components/Input';
import Page from 'components/Page';
import styles from './Register.module.css';

export default function RegisterPage() {
    return (
        <>
            <Container>
                <Page>
                    <Header hasBack>Регистрация</Header>
                    <div className={styles.content}>
                        <Input
                            onChange={() => {}}
                            id="name"
                            label="Имя"
                            type="text"
                        ></Input>
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
                        <Input
                            onChange={() => {}}
                            id="tel"
                            label="Телефон"
                            type="text"
                        ></Input>
                        <Input
                            onChange={() => {}}
                            id="country"
                            label="Страна"
                            type="country"
                        ></Input>
                        <NavLink className={styles.buttonLink} to="/">
                            <Button type="accent">Создать аккаунт</Button>
                        </NavLink>
                    </div>
                </Page>
            </Container>
        </>
    );
}
