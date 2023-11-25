import Button from 'components/Button';
import Container from 'components/Container';
import IconInfo from 'components/IconInfo';
import Page from 'components/Page';
import styles from './Profile.module.css';
import Phone from 'assets/icons/phone.svg?react';
import Mail from 'assets/icons/letter.svg?react';
import Home from 'assets/icons/home.svg?react';
import Header from 'components/Header';
import { NavLink } from 'react-router-dom';
import { useAppSelector } from 'redux-state';

export default function Profile() {
    const user = useAppSelector((state) => state.user);
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
                    <NavLink to="/auth" className={styles.buttonContainer}>
                        <Button>Выйти из аккаунта</Button>
                    </NavLink>
                </Page>
            </Container>
        </>
    );
}
