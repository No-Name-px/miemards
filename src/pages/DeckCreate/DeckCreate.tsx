import Container from '../../components/Container';
import Page from '../../components/Page';
import Header from '../../components/Header';
import styles from './DeckCreate.module.css';
import Input from '../../components/Input';
import Button from '../../components/Button';

export default function DeckPageCreate() {
    return (
        <>
            <Container>
                <Page>
                    <Header hasBack>Создание колоды</Header>
                    <div className={styles.content}>
                        <Input
                            onChange={() => {}}
                            id="deckName"
                            label="Название колоды"
                        ></Input>
                    </div>
                    <div className={styles.buttons}>
                        <Button>Сгенерировать 20 слов</Button>
                        <Button type="accent">Создать</Button>
                    </div>
                </Page>
            </Container>
        </>
    );
}
