import { NavLink, Navigate, useNavigate, useParams } from 'react-router-dom';
import Container from 'components/Container';
import Page from 'components/Page';
import Header from 'components/Header';
import styles from './DeckEdit.module.css';
import Input from 'components/Input';
import { useCallback, useEffect, useState } from 'react';
import Card from 'components/Card';
import TextPrimary from 'components/TextPrimary';
import TextSecondary from 'components/TextSecondary';
import TextTitle from 'components/TextTitle';
import IconAccent from 'components/IconAccent';
import Edit from 'assets/icons/edit-s.svg?react';
import Delete from 'assets/icons/trash-s.svg?react';
import Button from 'components/Button';
import { useAppDispatch, useAppSelector } from 'redux-state';
import {
    deleteCard,
    deleteDeck,
    editDeck,
    getCards,
    loadDeck,
} from 'redux-state/actions';
import TextArea from 'components/TextArea';

interface FormValues {
    name: string;
    description: string;
}

export default function DeckPageEdit() {
    const { id } = useParams();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const token = useAppSelector((state) => state.auth);
    const deck = useAppSelector((state) => state.deck);
    const cards = useAppSelector((state) => state.cards);

    const [formValues, setFormValues] = useState<FormValues>({
        name: '',
        description: '',
    });

    useEffect(() => {
        console.log(token, id);
        if (!token || !id) return;
        dispatch(loadDeck({ token, id: id }));
        dispatch(getCards({ token, id: id }));
    }, [token, dispatch, id]);

    useEffect(() => {
        if (deck?.name && deck.description) {
            setFormValues({
                name: deck.name,
                description: deck.description,
            });
        }
    }, [deck]);

    const handleUpdate = useCallback(() => {
        if (!token || !id) return;
        dispatch(
            editDeck({
                token,
                data: {
                    id,
                    name: formValues.name,
                    description: formValues.description,
                },
                navigate,
            })
        );
    }, [navigate, token, id, dispatch, formValues]);

    const handleChangeFromValues = useCallback(
        (key: keyof FormValues, value: string) => {
            setFormValues((state) => ({ ...state, [key]: value }));
        },
        []
    );

    const handleDeleteCard = useCallback(
        (cardId: string) => {
            if (!token || !id) return;
            dispatch(
                deleteCard({
                    token,
                    data: { id: cardId, deckId: id },
                })
            );
        },
        [token, id, dispatch]
    );

    const handleDelete = useCallback(() => {
        if (!token || !id) return;
        dispatch(deleteDeck({ token, data: id, navigate }));
    }, [navigate, token, id, dispatch]);

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
                                value={formValues.name}
                                onChange={(e) =>
                                    handleChangeFromValues(
                                        'name',
                                        e.target.value
                                    )
                                }
                                id="deckName"
                                label="Название колоды"
                            ></Input>
                            <TextArea
                                value={formValues.description}
                                onChange={(value) =>
                                    handleChangeFromValues('description', value)
                                }
                                id="deckDescription"
                                label="Описание"
                                rows={2}
                            ></TextArea>
                            <div className={styles.cardsContainer}>
                                {Object.keys(cards).map((key) => (
                                    <div
                                        key={cards[key].id}
                                        className={styles.card}
                                    >
                                        <Card className={styles.card}>
                                            <div className={styles.cardHeader}>
                                                <TextTitle>
                                                    {cards[key].english_word
                                                        ? cards[key]
                                                              .english_word
                                                        : '-'}
                                                </TextTitle>
                                                <div
                                                    className={
                                                        styles.cardButtons
                                                    }
                                                >
                                                    <NavLink
                                                        to={`/decks/${id}/cards/${key}/edit`}
                                                    >
                                                        <IconAccent
                                                            size="s"
                                                            icon={Edit}
                                                        ></IconAccent>
                                                    </NavLink>
                                                    <NavLink
                                                        to={``}
                                                        onClick={() =>
                                                            handleDeleteCard(
                                                                key
                                                            )
                                                        }
                                                    >
                                                        <IconAccent
                                                            size="s"
                                                            icon={Delete}
                                                        ></IconAccent>
                                                    </NavLink>
                                                </div>
                                            </div>
                                            <TextPrimary
                                                className={styles.textPrimary}
                                            >
                                                {cards[key].translation}
                                            </TextPrimary>
                                            <TextSecondary>
                                                {cards[key].explanation}
                                            </TextSecondary>
                                            {/* {card.img && (
                                                <Image
                                                    src={card.img}
                                                    alt="cardImg"
                                                ></Image>
                                            )} */}
                                        </Card>
                                    </div>
                                ))}
                            </div>
                            <div className={styles.buttonsContainer}>
                                <Button>Сгенерировать рекомендации</Button>
                                <Button type="cancel" onClick={handleDelete}>
                                    Удалить колоду
                                </Button>
                                <Button type="accent" onClick={handleUpdate}>
                                    Сохранить
                                </Button>
                            </div>
                        </div>
                    </Page>
                </Container>
            )}
        </div>
    );
}
