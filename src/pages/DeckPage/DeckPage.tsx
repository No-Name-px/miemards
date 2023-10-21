import { NavLink, Navigate, useParams } from 'react-router-dom';
import Container from '../../components/Container/Container';
import Page from '../../components/Page/Page';
import Header from '../../components/Header';
import { Deck } from '../../types/decks';
import MockedDecks from '../../mocks/decks.json';
import { useState } from 'react';
import styles from './DeckPage.module.css';
import Card from '../../components/Card';
import TextTitle from '../../components/TextTitle';
import TextPrimary from '../../components/TextPrimary/TextPrimary';
import TextSecondary from '../../components/TextSecondary/TextSecondary';
import Button from '../../components/Button';
import Image from '../../components/Image';

export default function DeckPage() {
    const { deckId } = useParams();
    const [deck, setDeck] = useState<Deck | undefined>(
        MockedDecks.find((item) => item.id.toString() === deckId)
    );
    return (
        <div>
            {!deck ? (
                <Navigate to="/error" replace={true} />
            ) : (
                <Container>
                    <Page>
                        <Header hasBack hasEdit>
                            {deck.name}
                        </Header>
                        <div className={styles.cards}>
                            {deck.cards.map((card, index) => (
                                <div key={index} className={styles.card}>
                                    <NavLink
                                        className={styles.cardLink}
                                        to={`cards/${index + 1}`}
                                    >
                                        <Card className={styles.card}>
                                            <TextTitle>
                                                {card.wordEN
                                                    ? card.wordEN
                                                    : '-'}
                                            </TextTitle>
                                            <TextPrimary
                                                className={styles.textPrimary}
                                            >
                                                {card.wordRU}
                                            </TextPrimary>
                                            <TextSecondary>
                                                {card.description}
                                            </TextSecondary>
                                            {card.img && (
                                                <Image
                                                    src={card.img}
                                                    alt="cardImg"
                                                ></Image>
                                            )}
                                        </Card>
                                    </NavLink>
                                </div>
                            ))}
                        </div>
                    </Page>
                </Container>
            )}
        </div>
    );
}
