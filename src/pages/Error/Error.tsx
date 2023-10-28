import Container from '../../components/Container';
import Page from '../../components/Page';
import Cat from '../../assets/pics/404.svg?react';
import styles from './Error.module.css';
import Button from '../../components/Button';
import { NavLink } from 'react-router-dom';

export default function ErrorPage() {
    return (
        <>
            <Container>
                <Page>
                    <div className={styles.container}>
                        <Cat></Cat>
                        <h1 className={styles.title}>404</h1>
                        <p className={styles.text}>
                            Вернитесь на прошлую страницу или зайдите позже
                        </p>
                        <NavLink
                            to=".."
                            relative="path"
                            className={styles.buttonContainer}
                        >
                            <Button type="accent">Назад</Button>
                        </NavLink>
                    </div>
                </Page>
            </Container>
        </>
    );
}
