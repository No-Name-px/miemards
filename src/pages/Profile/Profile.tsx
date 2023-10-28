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

export default function Profile() {
    return (
        <>
            <Container>
                <Page>
                    <Header hasEdit>Александр</Header>
                    <div className={styles.infoBlock}>
                        <IconInfo icon={Phone}>
                            <p>+7 915 485-94-75</p>
                        </IconInfo>
                        <IconInfo icon={Mail}>
                            <p>daf201517@gmail.com</p>
                        </IconInfo>
                        <IconInfo icon={Home}>
                            <p>Россия</p>
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
