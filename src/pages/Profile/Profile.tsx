import Button from 'components/Button';
import Container from 'components/Container';
import IconInfo from 'components/IconInfo';
import Page from 'components/Page';
import styles from './Profile.module.css';
import Phone from 'assets/icons/phone.svg?react';
import Mail from 'assets/icons/letter.svg?react';
import NextArrow from '../../assets/icons/chevron-right.svg?react';
import Home from 'assets/icons/home.svg?react';
import Paper from 'assets/icons/paper-long.svg?react';
import Cards from 'assets/icons/cards.svg?react';
import Chess from 'assets/icons/chess.svg?react';
import Header from 'components/Header';
import { useAppDispatch, useAppSelector } from 'redux-state';
import { useCallback, useEffect } from 'react';
import { AuthActions, UserActions } from 'redux-state/actions';
import { NavLink, useNavigate } from 'react-router-dom';

export default function Profile() {
    const user = useAppSelector((state) => state.user);
    const token = useAppSelector((state) => state.auth);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) return;
        dispatch(UserActions.getUser({ token }));
    }, [token, dispatch]);

    const onLogout = useCallback(() => {
        dispatch(AuthActions.logout({ navigate }));
    }, [dispatch, navigate]);

    const onDelete = useCallback(() => {
        if (!token) return;
        dispatch(UserActions.deleteUser({ navigate, data: { token } }));
    }, [dispatch, navigate, token]);

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
                        <NavLink
                            to="bankCards"
                            className={styles.navLinkContainer}
                        >
                            <IconInfo icon={Cards}>
                                <div className={styles.navLink}>
                                    <p>Банковские карты</p>
                                    <NextArrow fill="var(--accent-1)"></NextArrow>
                                </div>
                            </IconInfo>
                        </NavLink>
                        <NavLink
                            to="interests"
                            className={styles.navLinkContainer}
                        >
                            <IconInfo icon={Chess}>
                                <div className={styles.navLink}>
                                    <p>Интересы</p>
                                    <NextArrow fill="var(--accent-1)"></NextArrow>
                                </div>
                            </IconInfo>
                        </NavLink>
                        <NavLink to="posts" className={styles.navLinkContainer}>
                            <IconInfo icon={Paper}>
                                <div className={styles.navLink}>
                                    <p>Посты</p>
                                    <NextArrow fill="var(--accent-1)"></NextArrow>
                                </div>
                            </IconInfo>
                        </NavLink>
                    </div>
                    <div className={styles.buttonContainer}>
                        <Button type="cancel" onClick={onDelete}>
                            Удалить аккаунт
                        </Button>
                        <Button onClick={onLogout}>Выйти из аккаунта</Button>
                    </div>
                </Page>
            </Container>
        </>
    );
}
