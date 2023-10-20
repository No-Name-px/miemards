import { Navigate, useParams } from 'react-router-dom';
import Container from '../../components/Container';
import Page from '../../components/Page';
import Header from '../../components/Header';
import Card from '../../components/Card';
import TextTitle from '../../components/TextTitle';
import TextPrimary from '../../components/TextPrimary';
import MockedDecks from '../../mocks/decks.json';
import { useState } from 'react';
import { Card as TCard } from '../../types/decks';
import styles from './CardPage.module.css';
import Button from '../../components/Button';
import TextSecondary from '../../components/TextSecondary';
import Image from '../../components/Image';

export default function CardPage() {
    const { deckId, cardId } = useParams();
    const [card, setCard] = useState<TCard | undefined>(
        cardId
            ? MockedDecks.find((item) => item.id.toString() === deckId)?.cards[
                  +cardId - 1
              ]
            : undefined
    );
    return (
        <div>
            {!card ? (
                <Navigate to="/error" replace={true} />
            ) : (
                <Container>
                    <Page>
                        <Header hasBack hasEdit>
                            Карточка
                        </Header>
                        <div className={styles.cardSides}>
                            <Card>
                                <TextTitle>Передняя сторона</TextTitle>
                                <TextPrimary className={styles.textPrimary}>
                                    {card.wordRU}
                                </TextPrimary>
                                <TextSecondary>
                                    {card.description}
                                </TextSecondary>
                                {card.img && (
                                    <Image src={card.img} alt="cardImg"></Image>
                                )}
                            </Card>
                            <Card>
                                <TextTitle>Задняя сторона</TextTitle>
                                <TextPrimary className={styles.textPrimary}>
                                    {card.wordEN ? card.wordEN : '-'}
                                </TextPrimary>
                            </Card>
                        </div>
                        <Button className={styles.delete}>
                            Удалить карточку
                        </Button>
                    </Page>
                </Container>
            )}
        </div>
    );
}
