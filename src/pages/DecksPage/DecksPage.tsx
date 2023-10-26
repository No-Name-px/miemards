import { useState } from 'react';
import Container from '../../components/Container';
import Header from '../../components/Header';
import Page from '../../components/Page';
import MockedDecks from '../../mocks/decks.json';
import Card from '../../components/Card';
import TextTitle from '../../components/TextTitle';
import { Deck } from '../../types/decks';
import styles from './DecksPage.module.css';
import ProgressCounter from '../../components/ProgressCounter';
import IconAccent from '../../components/IconAccent';
import Play from '../../assets/icons/media-play.svg?react';
import { NavLink } from 'react-router-dom';

export default function Decks() {
    const [decks] = useState<Deck[]>(MockedDecks);
    return (
        <div>
            <Container>
                <Page>
                    <Header>Все колоды</Header>
                    <div className={styles.decks}>
                        {decks.map((deck) => (
                            <NavLink
                                className={styles.cardLink}
                                to={`${deck.id}`}
                                key={deck.id}
                            >
                                <Card className={styles.deckCard}>
                                    <div className={styles.cardContent}>
                                        <div className={styles.header}>
                                            <TextTitle>{deck.name}</TextTitle>
                                            <ProgressCounter
                                                className={styles.progress}
                                            >
                                                {deck.wordsLearned}/
                                                {deck.wordsAll}
                                            </ProgressCounter>
                                        </div>
                                        <p className={styles.description}>
                                            {deck.description}
                                        </p>
                                    </div>
                                    <NavLink to={`${deck.id}/play`}>
                                        <IconAccent
                                            className={styles.play}
                                            icon={Play}
                                        ></IconAccent>
                                    </NavLink>
                                </Card>
                            </NavLink>
                        ))}
                    </div>
                </Page>
            </Container>
        </div>
    );
}
