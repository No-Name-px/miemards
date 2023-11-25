import Button from 'components/Button';
import Container from 'components/Container';
import Header from 'components/Header';
import Input from 'components/Input';
import Page from 'components/Page';
import styles from './Register.module.css';
import { useAppDispatch } from 'redux-state';
import { useCallback, useState } from 'react';
import { AuthActions } from 'redux-state/actions';
import { Register } from 'types';
import { useNavigate } from 'react-router-dom';

export default function RegisterPage() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [formValues, setFormValues] = useState<Register>({
        username: '',
        password: '',
        country: '',
        email: '',
        phone: '',
    });

    const onSubmit = useCallback(() => {
        dispatch(AuthActions.register({ data: formValues, navigate }));
    }, [dispatch, formValues]);

    const valueChange = useCallback((key: keyof Register, value: string) => {
        setFormValues((oldValues) => ({
            ...oldValues,
            [key]: value,
        }));
    }, []);

    return (
        <>
            <Container>
                <Page>
                    <Header hasBack>Регистрация</Header>
                    <div className={styles.content}>
                        <Input
                            onChange={(v) => valueChange('username', v)}
                            id="username"
                            label="Имя"
                            type="text"
                        ></Input>
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
                        <Input
                            onChange={(v) => valueChange('phone', v)}
                            id="phone"
                            label="Телефон"
                            type="text"
                        ></Input>
                        <Input
                            onChange={(v) => valueChange('country', v)}
                            id="country"
                            label="Страна"
                            type="country"
                        ></Input>
                        <Button type="accent" onClick={onSubmit}>
                            Создать аккаунт
                        </Button>
                    </div>
                </Page>
            </Container>
        </>
    );
}
