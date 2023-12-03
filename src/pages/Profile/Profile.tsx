import Button from 'components/Button';
import Container from 'components/Container';
import IconInfo from 'components/IconInfo';
import Page from 'components/Page';
import styles from './Profile.module.css';
import Phone from 'assets/icons/phone.svg?react';
import Mail from 'assets/icons/letter.svg?react';
import Home from 'assets/icons/home.svg?react';
import Header from 'components/Header';
import { useAppDispatch, useAppSelector } from 'redux-state';
import { useCallback } from 'react';
import { AuthActions } from 'redux-state/actions';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
    const user = useAppSelector((state) => state.user);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const onLogout = useCallback(() => {
        dispatch(AuthActions.logout({ navigate }));
    }, [dispatch, navigate]);
    return (
        <>
            <Container>
                <Page>
                    <Header hasEdit>{user?.username}</Header>
                    <div className={styles.infoBlock}>
                        <IconInfo icon={Phone}>
                            <p>{user?.phone}</p>
                        </IconInfo>
                        <IconInfo icon={Mail}>
                            <p>{user?.email}</p>
                        </IconInfo>
                        <IconInfo icon={Home}>
                            <p>{user?.country}</p>
                        </IconInfo>
                    </div>
                    <Button onClick={onLogout}>Выйти из аккаунта</Button>
                </Page>
            </Container>
        </>
    );
}
