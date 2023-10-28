import Card from '../../components/Card';
import Container from '../../components/Container';
import Header from '../../components/Header';
import Page from '../../components/Page';
import TextSecondary from '../../components/TextSecondary';
import Title from '../../components/Title';
import styles from './Game.module.css';
import { Deck } from '../../types/decks';
import MockedDecks from '../../mocks/decks.json';
import { Navigate, useParams } from 'react-router-dom';
import { useCallback, useMemo, useState } from 'react';
import Image from '../../components/Image';
import bgPath from '../../assets/pics/main-bg.svg';
import Button from '../../components/Button';

export default function PlayPage() {
    const { deckId } = useParams();
    const [deck] = useState<Deck | undefined>(
        MockedDecks.find((item) => item.id.toString() === deckId)
    );
    const [currentNumber, setCurrentNumber] = useState(0);
    const [isHidden, setIsHidden] = useState(true);
    const currentCard = useMemo(
        () => (deck ? deck.cards[currentNumber] : undefined),
        [deck, currentNumber]
    );

    const handleShowAnswer = useCallback(() => {
        setIsHidden(false);
    }, [setIsHidden]);
    const handleRightAnswer = useCallback(() => {
        setIsHidden(true);
        setCurrentNumber((curr) => curr + 1);
    }, [setCurrentNumber]);
    const handleWrongAnswer = useCallback(() => {
        setIsHidden(true);
        setCurrentNumber((curr) => curr + 1);
    }, [setCurrentNumber]);

    if (currentNumber === deck?.cards.length)
        return <Navigate to="finish"></Navigate>;
    if (!currentCard) return <Navigate to="/"></Navigate>;
    return (
        <>
            <Container className={styles.resetContainer}>
                <Page className={styles.headerContainer}>
                    <div className={styles.header}>
                        <Header hasBack>Игра</Header>
                        <TextSecondary className={styles.progress}>
                            {currentNumber + 1}/{deck?.cards.length}
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
                        <div className={styles.cards}>
                            <Card>
                                <Title>{currentCard.wordRU}</Title>
                                <TextSecondary className={styles.description}>
                                    {currentCard.description}
                                </TextSecondary>

                                {currentCard.img && (
                                    <Image
                                        src={currentCard.img}
                                        alt="cardImg"
                                        className={styles.img}
                                    ></Image>
                                )}
                            </Card>
                            {!isHidden && (
                                <Card>
                                    <Title>{currentCard.wordEN}</Title>
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
                    </Page>
                </Container>
            </div>
        </>
    );
}
