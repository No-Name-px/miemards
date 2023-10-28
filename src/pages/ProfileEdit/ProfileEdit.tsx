import Button from 'components/Button';
import Container from 'components/Container';
import Header from 'components/Header';
import Input from 'components/Input';
import Page from 'components/Page';
import styles from './ProfileEdit.module.css';

export default function ProfilePageEdit() {
    return (
        <>
            <Container>
                <Page>
                    <Header hasBack>Александр</Header>
                    <div className={styles.inputBlock}>
                        <Input
                            id={'name'}
                            onChange={(value: string) => {
                                console.log(value);
                            }}
                            label="Имя"
                        ></Input>
                        <Input
                            id={'number'}
                            onChange={(value: string) => {
                                console.log(value);
                            }}
                            label="Телефон"
                        ></Input>
                        <Input
                            id={'email'}
                            onChange={(value: string) => {
                                console.log(value);
                            }}
                            label="Почта"
                        ></Input>
                        <Input
                            id={'country'}
                            onChange={(value: string) => {
                                console.log(value);
                            }}
                            label="Страна"
                        ></Input>
                    </div>
                    <div className={styles.buttons}>
                        <Button type="accent">Сохранить</Button>
                        <Button>Отменить</Button>
                    </div>
                </Page>
            </Container>
        </>
    );
}
