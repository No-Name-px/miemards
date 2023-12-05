import Button from 'components/Button';
import Container from 'components/Container';
import Header from 'components/Header';
import Input from 'components/Input';
import Page from 'components/Page';
import styles from './ProfileEdit.module.css';
import { useCallback, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'redux-state';
import { NavLink, useNavigate } from 'react-router-dom';
import { UserActions } from 'redux-state/actions';

interface ProfileEdit {
    username: string;
    phone: string;
    email: string;
    country: string;
    password: string;
}

export default function ProfilePageEdit() {
    const user = useAppSelector((state) => state.user);
    const token = useAppSelector((state) => state.auth);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [editValues, setEditValues] = useState<ProfileEdit>({
        username: user.username || '',
        phone: user.phone || '',
        email: user.email || '',
        country: user.country || '',
        password: '',
    });

    const onEditUserChange = useCallback(
        (key: keyof ProfileEdit, value: unknown) => {
            setEditValues((state) => ({
                ...state,
                [key]: value,
            }));
        },
        []
    );

    const onSubmitForm = useCallback(() => {
        dispatch(
            UserActions.updateUser({
                data: {
                    ...editValues,
                    id: user.id,
                },
                token,
                navigate,
            })
        );
    }, [dispatch, navigate, editValues, token, user.id]);
    return (
        <>
            <Container>
                <Page>
                    <Header hasBack>Редактирование</Header>
                    <div className={styles.inputBlock}>
                        <Input
                            id={'name'}
                            onChange={(e) =>
                                onEditUserChange('username', e.target.value)
                            }
                            label="Имя"
                            value={editValues.username}
                        ></Input>
                        <Input
                            id={'number'}
                            onChange={(e) =>
                                onEditUserChange('phone', e.target.value)
                            }
                            label="Телефон"
                            value={editValues.phone}
                        ></Input>
                        <Input
                            id={'email'}
                            onChange={(e) =>
                                onEditUserChange('email', e.target.value)
                            }
                            label="Почта"
                            value={editValues.email}
                        ></Input>
                        <Input
                            id={'country'}
                            onChange={(e) =>
                                onEditUserChange('country', e.target.value)
                            }
                            label="Страна"
                            value={editValues.country}
                        ></Input>
                        <Input
                            id={'password'}
                            onChange={(e) =>
                                onEditUserChange('password', e.target.value)
                            }
                            label="Пароль"
                            value={editValues.password}
                        ></Input>
                    </div>
                    <div className={styles.buttons}>
                        <Button onClick={onSubmitForm} type="accent">
                            Сохранить
                        </Button>
                        <NavLink to=".." relative="path">
                            <Button>Отменить</Button>
                        </NavLink>
                    </div>
                </Page>
            </Container>
        </>
    );
}
