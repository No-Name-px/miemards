import { useState } from 'react';
import Container from '../../components/Container';
import Header from '../../components/Header';
import Page from '../../components/Page';
import MockedDecks from '../../mocks/decks.json';
import Card from '../../components/Card';
import TextTitle from '../../components/TextTitle/TextTitle';
import { Deck } from '../../types/decks';
import styles from './DecksPage.module.css';
import ProgressCounter from '../../components/ProgressCounter';
import IconAccent from '../../components/IconAccent';
import Play from '../../assets/icons/media-play.svg?react';

export default function Decks() {
    const [decks, setDecks] = useState<Deck[]>(MockedDecks);
    return (
        <div>
            <Container>
                <Page>
                    <Header>Все колоды</Header>
                    <div className={styles.decks}>
                        {decks.map((deck) => (
                            <Card key={deck.id} className={styles.deckCard}>
                                <div className={styles.cardContent}>
                                    <div className={styles.header}>
                                        <TextTitle>{deck.name}</TextTitle>
                                        <ProgressCounter
                                            className={styles.progress}
                                        >
                                            {deck.wordsLearned}/{deck.wordsAll}
                                        </ProgressCounter>
                                    </div>
                                    <p>{deck.description}</p>
                                </div>
                                <IconAccent
                                    className={styles.play}
                                    icon={Play}
                                ></IconAccent>
                            </Card>
                        ))}
                    </div>
                </Page>
            </Container>
        </div>
    );
}
