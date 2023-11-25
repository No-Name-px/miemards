import Button from 'components/Button';
import Container from 'components/Container';
import Header from 'components/Header';
import Input from 'components/Input';
import Page from 'components/Page';
import styles from './Login.module.css';
import { useAppDispatch } from 'redux-state';
import { useCallback, useState } from 'react';
import { Login } from 'types';
import { AuthActions } from 'redux-state/actions';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [formValues, setFormValues] = useState<Login>({
        password: '',
        email: '',
    });

    const onSubmit = useCallback(() => {
        dispatch(AuthActions.login({ data: formValues, navigate }));
    }, [dispatch, formValues, navigate]);

    const valueChange = useCallback((key: keyof Login, value: string) => {
        setFormValues((oldValues) => ({
            ...oldValues,
            [key]: value,
        }));
    }, []);

    return (
        <>
            <Container>
                <Page>
                    <Header hasBack>Вход</Header>
                    <div className={styles.content}>
                        <Input
                            onChange={(v) => valueChange('email', v)}
                            id="email"
                            label="Почта"
                            type="text"
                        ></Input>
                        <Input
                            onChange={(v) => valueChange('password', v)}
                            id="password"
                            label="Пароль"
                            type="password"
                        ></Input>
                        <Button onClick={onSubmit} type="accent">
                            Войти
                        </Button>
                    </div>
                </Page>
            </Container>
        </>
    );
}
