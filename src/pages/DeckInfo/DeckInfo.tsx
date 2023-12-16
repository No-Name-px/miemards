import { NavLink, Navigate, useParams } from 'react-router-dom';
import Container from 'components/Container/Container';
import Page from 'components/Page/Page';
import Header from 'components/Header';
import { Deck } from 'types/decks';
import MockedDecks from 'mocks/decks.json';
import { useEffect, useState } from 'react';
import styles from './DeckInfo.module.css';
import Card from 'components/Card';
import TextTitle from 'components/TextTitle';
import TextPrimary from 'components/TextPrimary/TextPrimary';
import TextSecondary from 'components/TextSecondary/TextSecondary';
import Image from 'components/Image';
import { useAppDispatch, useAppSelector } from 'redux-state';
import { getCards, loadDeck } from 'redux-state/actions';

export default function DeckPage() {
    const { id } = useParams();
    const dispatch = useAppDispatch();

    const token = useAppSelector((state) => state.auth);

    useEffect(() => {
        console.log(token, id);
        if (!token || !id) return;
        dispatch(loadDeck({ token, id: id }));
        dispatch(getCards({ token, id: id }));
    }, [token, dispatch, id]);

    const deck = useAppSelector((state) => state.deck);
    const cards = useAppSelector((state) => state.cards);

    console.log(cards);

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
                            {Object.keys(cards).map((key) => (
                                <div
                                    key={cards[key].id}
                                    className={styles.card}
                                >
                                    <NavLink
                                        className={styles.cardLink}
                                        to={`cards/${cards[key].id}`}
                                    >
                                        <Card className={styles.card}>
                                            <TextTitle>
                                                {cards[key].english_word
                                                    ? cards[key].english_word
                                                    : '-'}
                                            </TextTitle>
                                            <TextPrimary
                                                className={styles.textPrimary}
                                            >
                                                {cards[key].translation}
                                            </TextPrimary>
                                            <TextSecondary>
                                                {cards[key].explanation}
                                            </TextSecondary>
                                            {/* {cards[key]?.img && (
                                                <Image
                                                    src={cards[key].img}
                                                    alt="cardImg"
                                                ></Image>
                                            )} */}
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
