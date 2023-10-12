import Button from '../../components/Button';
import Container from '../../components/Container';
import Page from '../../components/Page';
import Title from '../../components/Title';
import styles from './ProfilePage.module.css';

export default function Profile() {
    return (
        <>
            <Container>
                <Page>
                    <Title>Александр</Title>
                    <div className={styles.infoBlock}></div>
                    <Button>Выйти из аккаунта</Button>
                </Page>
            </Container>
        </>
    );
}
