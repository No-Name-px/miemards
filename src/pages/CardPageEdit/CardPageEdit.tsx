import { Navigate, useParams } from 'react-router-dom';
import Card from '../../components/Card';
import Container from '../../components/Container';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Page from '../../components/Page';
import TextArea from '../../components/TextArea';
import TextTitle from '../../components/TextTitle';
import styles from './CardPageEdit.module.css';
import { Card as TCard } from '../../types/decks';
import MockedDecks from '../../mocks/decks.json';
import { useState } from 'react';
import Button from '../../components/Button';
import Image from '../../components/Image';

export default function CardPageEdit() {
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
                        <Header hasBack>Редактирование карточки</Header>
                        <div className={styles.cardSides}>
                            <Card>
                                <TextTitle>Передняя сторона</TextTitle>
                                <div className={styles.cardContent}>
                                    <Input
                                        onChange={() => {}}
                                        id={'ruWord'}
                                        label="Перевод"
                                    ></Input>
                                    <TextArea
                                        onChange={() => {}}
                                        id={'description'}
                                        label="Обьяснение слова"
                                        rows={3}
                                    ></TextArea>
                                    {card.img ? (
                                        <Image
                                            src={card.img}
                                            alt="cardImg"
                                        ></Image>
                                    ) : (
                                        <Button>Сгенерировать картинку</Button>
                                    )}
                                </div>
                            </Card>
                            {card.wordEN && (
                                <Card>
                                    <TextTitle>Задняя сторона</TextTitle>
                                    <div className={styles.cardContent}>
                                        <Input
                                            onChange={() => {}}
                                            id={'enWord'}
                                            label="Слово на английском"
                                        ></Input>
                                    </div>
                                </Card>
                            )}
                            {!card.wordEN && (
                                <Button type="accent">
                                    Сгенерировать перевод
                                </Button>
                            )}
                            {card.wordEN && (
                                <Button type="accent">Сохранить</Button>
                            )}
                        </div>
                    </Page>
                </Container>
            )}
        </div>
    );
}
