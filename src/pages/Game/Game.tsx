import Card from 'components/Card';
import Container from 'components/Container';
import Header from 'components/Header';
import Page from 'components/Page';
import TextSecondary from 'components/TextSecondary';
import Title from 'components/Title';
import styles from './Game.module.css';
import { Deck } from 'types/decks';
import MockedDecks from 'mocks/decks.json';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { useCallback, useEffect, useMemo, useState } from 'react';
import Image from 'components/Image';
import bgPath from 'assets/pics/main-bg.svg';
import Button from 'components/Button';
import { useAppDispatch, useAppSelector } from 'redux-state';
import { getCards, loadDeck, AnalyticsActions } from 'redux-state/actions';

export default function PlayPage() {
    const { deckId } = useParams();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const deck = useAppSelector((state) => state.deck);
    const token = useAppSelector((state) => state.auth);
    const cards = useAppSelector((state) => state.cards);

    const [currentNumber, setCurrentNumber] = useState(0);
    const [rightAnswers, setRightAnswers] = useState(0);
    const [wrongAnswers, setWrongAnswers] = useState(0);
    const [isHidden, setIsHidden] = useState(true);

    const currentCard = useMemo(
        () => (cards ? cards[Object.keys(cards)[currentNumber]] : undefined),
        [cards, currentNumber]
    );

    useEffect(() => {
        if (!token || !deckId) return;
        dispatch(getCards({ token, id: deckId }));
        dispatch(loadDeck({ token, id: deckId }));
    }, [token, dispatch, deckId]);

    useEffect(() => {
        if (
            token &&
            !currentCard &&
            deck?.id === deckId &&
            Object.keys(cards).length !== 0
        )
            dispatch(
                AnalyticsActions.sendAnalytics({
                    token,
                    navigate,
                    data: {
                        words_learned: rightAnswers,
                        decks_learned_fully: wrongAnswers === 0 ? 1 : 0,
                        decks_learned_partly: wrongAnswers === 0 ? 0 : 1,
                    },
                })
            );
    }, [
        token,
        currentCard,
        deck,
        deckId,
        rightAnswers,
        wrongAnswers,
        navigate,
        dispatch,
        cards,
    ]);

    const handleShowAnswer = useCallback(() => {
        setIsHidden(false);
    }, [setIsHidden]);
    const handleRightAnswer = useCallback(() => {
        setIsHidden(true);
        setCurrentNumber((curr) => curr + 1);
        setRightAnswers((curr) => curr + 1);
    }, [setCurrentNumber, setRightAnswers, setIsHidden]);
    const handleWrongAnswer = useCallback(() => {
        setIsHidden(true);
        setCurrentNumber((curr) => curr + 1);
        setWrongAnswers((curr) => curr + 1);
    }, [setCurrentNumber, setWrongAnswers, setIsHidden]);

    if (Object.keys(cards).length === 0 && deck?.id === deckId)
        return <Navigate to="/"></Navigate>;
    if (!currentCard && deck?.id === deckId) {
        return (
            <Navigate
                to="finish"
                replace={true}
                state={{ wrongAnswers, rightAnswers }}
            ></Navigate>
        );
    }
    return (
        <>
            <Container className={styles.resetContainer}>
                <Page className={styles.headerContainer}>
                    <div className={styles.header}>
                        <Header hasBack>Игра</Header>
                        <TextSecondary className={styles.progress}>
                            {currentNumber + 1}/{Object.keys(cards).length}
                        </TextSecondary>
                    </div>
                </Page>
            </Container>
            <div
                className={styles.background}
                style={{ backgroundImage: `url(${bgPath})` }}
            >
                <Container>
                    <Page className={styles.contentContainer}>
                        {currentCard && (
                            <>
                                <div className={styles.cards}>
                                    <Card>
                                        <Title>{currentCard.translation}</Title>
                                        <TextSecondary
                                            className={styles.description}
                                        >
                                            {currentCard.explanation}
                                        </TextSecondary>

                                        {/* {currentCard.img && (
                                    <Image
                                        src={currentCard.img}
                                        alt="cardImg"
                                        className={styles.img}
                                    ></Image>
                                )} */}
                                    </Card>
                                    {!isHidden && (
                                        <Card>
                                            <Title>
                                                {currentCard.english_word}
                                            </Title>
                                        </Card>
                                    )}
                                </div>
                                <div className={styles.buttons}>
                                    {isHidden && (
                                        <Button
                                            onClick={handleShowAnswer}
                                            type="accent"
                                        >
                                            Показать
                                        </Button>
                                    )}
                                    {!isHidden && (
                                        <>
                                            <Button
                                                onClick={handleRightAnswer}
                                                type="accept"
                                                size="s"
                                            >
                                                Я прав!
                                            </Button>
                                            <Button
                                                onClick={handleWrongAnswer}
                                                type="cancel"
                                                size="s"
                                            >
                                                Я не прав(
                                            </Button>
                                        </>
                                    )}
                                </div>
                            </>
                        )}
                    </Page>
                </Container>
            </div>
        </>
    );
}
