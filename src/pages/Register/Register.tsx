import { NavLink } from 'react-router-dom';
import Button from 'components/Button';
import Container from 'components/Container';
import Header from 'components/Header';
import Input from 'components/Input';
import Page from 'components/Page';
import styles from './Register.module.css';

export default function RegisterPage() {
    // const registerUser = async () => {
    //     fetch('http://127.0.0.1:8000/register', {
    //         method: 'POST', // POST, PUT, DELETE, etc.
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             country: 'Testland',
    //             email: 'test@example.com',
    //             password: 'testpassword',
    //             phone: '1234567890',
    //             username: 'testuser',
    //         }),
    //         mode: 'no-cors',
    //         referrerPolicy: 'unsafe-url',
    //     });
    // };

    // const url = 'http://127.0.0.1:8000/register';
    // const data = {
    //     country: 'Testland',
    //     email: 'test@example.com',
    //     password: 'testpassword',
    //     phone: '1234567890',
    //     username: 'testuser',
    // };

    // fetch(url, {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(data),
    // })
    //     .then((response) => response.json())
    //     .then((result) => console.log(result))
    //     .catch((error) => console.error('Error:', error));

    // const url = 'http://127.0.0.1:8000/decks/show_users_decks';

    // fetch(url, {
    //     method: 'GET',
    //     headers: {
    //         'Content-Type': 'application/json',
    //         Authorization:
    //             'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyIiwiZXhwIjoxNzAwNzY0MjE5fQ.3IgVVYxlsCZbMV74C7LyBTQoySy4Kd9tgdo_OKGpuAk',
    //     },
    // })
    //     .then((response) => response.json())
    //     .then((result) => console.log(result))
    //     .catch((error) => console.error('Error:', error));

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
