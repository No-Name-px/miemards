import { NavLink, Navigate, useParams } from 'react-router-dom';
import Container from '../../components/Container';
import Page from '../../components/Page';
import Header from '../../components/Header';
import styles from './DeckPageEdit.module.css';
import Input from '../../components/Input';
import MockedDecks from '../../mocks/decks.json';
import { Deck } from '../../types/decks';
import { useState } from 'react';
import Card from '../../components/Card';
import TextPrimary from '../../components/TextPrimary';
import TextSecondary from '../../components/TextSecondary';
import TextTitle from '../../components/TextTitle';
import IconAccent from '../../components/IconAccent';
import Edit from '../../assets/icons/edit-s.svg?react';
import Delete from '../../assets/icons/trash-s.svg?react';

export default function DeckPageEdit() {
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
                        <Header hasBack>Редактирование колоды</Header>
                        <div className={styles.content}>
                            <Input
                                onChange={() => {}}
                                id="deckName"
                                label="Название колоды"
                            ></Input>
                            {deck.cards.map((card, index) => (
                                <div key={index}>
                                    <Card>
                                        <div className={styles.cardHeader}>
                                            <TextTitle>
                                                {card.wordEN
                                                    ? card.wordEN
                                                    : '-'}
                                            </TextTitle>
                                            <div className={styles.cardButtons}>
                                                <NavLink
                                                    to={`/decks/${deckId}/cards/${
                                                        index + 1
                                                    }/edit`}
                                                >
                                                    <IconAccent
                                                        size="s"
                                                        icon={Edit}
                                                    ></IconAccent>
                                                </NavLink>
                                                <IconAccent
                                                    size="s"
                                                    icon={Delete}
                                                ></IconAccent>
                                            </div>
                                        </div>
                                        <TextPrimary
                                            className={styles.textPrimary}
                                        >
                                            {card.wordRU}
                                        </TextPrimary>
                                        <TextSecondary>
                                            {card.description}
                                        </TextSecondary>
                                        {card.img && (
                                            <img
                                                className={styles.image}
                                                src={card.img}
                                                alt="cardImg"
                                            />
                                        )}
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </Page>
                </Container>
            )}
        </div>
    );
}
