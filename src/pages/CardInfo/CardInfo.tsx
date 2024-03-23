/* eslint-disable @typescript-eslint/no-unused-vars */
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import Container from 'components/Container';
import Page from 'components/Page';
import Header from 'components/Header';
import Card from 'components/Card';
import TextTitle from 'components/TextTitle';
import TextPrimary from 'components/TextPrimary';
import { useCallback, useEffect } from 'react';
import styles from './CardInfo.module.css';
import Button from 'components/Button';
import TextSecondary from 'components/TextSecondary';
import Image from 'components/Image';
import { useAppDispatch, useAppSelector } from 'redux-state';
import { deleteCard, loadCard } from 'redux-state/actions';

export default function CardPage() {
    const { deckId, cardId } = useParams();
    const dispatch = useAppDispatch();
    const token = useAppSelector((state) => state.auth);

    const card = useAppSelector((state) => state.card);
    const navigate = useNavigate();

    useEffect(() => {
        if (!token || !cardId) return;
        dispatch(loadCard({ token, id: cardId }));
    }, [dispatch, cardId, token]);

    const handleDelete = useCallback(() => {
        if (!token || !cardId || !deckId) return;
        dispatch(
            deleteCard({
                token,
                data: { id: cardId, deckId: deckId },
                navigate,
            })
        );
    }, [token, cardId]);

    return (
        <div>
            {!card ? (
                <Navigate to="/error" replace={true} />
            ) : (
                <Container className={styles.container}>
                    <Page>
                        <Header hasBack hasEdit>
                            Карточка
                        </Header>
                        <div className={styles.cardSides}>
                            <Card>
                                <TextTitle>Передняя сторона</TextTitle>
                                <TextPrimary className={styles.textPrimary}>
                                    {card.translation}
                                </TextPrimary>
                                <TextSecondary>
                                    {card.explanation}
                                </TextSecondary>
                                {card.image && (
                                    <Image
                                        src={card.image}
                                        alt="cardImg"
                                    ></Image>
                                )}
                            </Card>
                            <Card>
                                <TextTitle>Задняя сторона</TextTitle>
                                <TextPrimary className={styles.textPrimary}>
                                    {card.english_word
                                        ? card.english_word
                                        : '-'}
                                </TextPrimary>
                            </Card>
                        </div>
                        <Button
                            className={styles.delete}
                            onClick={handleDelete}
                        >
                            Удалить карточку
                        </Button>
                    </Page>
                </Container>
            )}
        </div>
    );
}
