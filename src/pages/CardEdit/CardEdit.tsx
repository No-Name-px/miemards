import { Navigate, useNavigate, useParams } from 'react-router-dom';
import Card from 'components/Card';
import Container from 'components/Container';
import Header from 'components/Header';
import Input from 'components/Input';
import Page from 'components/Page';
import TextArea from 'components/TextArea';
import TextTitle from 'components/TextTitle';
import styles from './CardEdit.module.css';
import { useCallback, useEffect, useState } from 'react';
import Button from 'components/Button';
import Image from 'components/Image';
import { useAppDispatch, useAppSelector } from 'redux-state';
import { editCard, loadCard } from 'redux-state/actions';

interface FormValues {
    english_word: string;
    translation: string;
    explanation: string;
}

export default function CardPageEdit() {
    const { deckId, cardId } = useParams();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const token = useAppSelector((state) => state.auth);
    const card = useAppSelector((state) => state.card);

    const [formValues, setFormValues] = useState<FormValues>({
        translation: '',
        english_word: '',
        explanation: '',
    });

    useEffect(() => {
        if (!token || !cardId) return;
        dispatch(loadCard({ token, id: cardId }));
    }, [dispatch, cardId, token]);

    useEffect(() => {
        if (card.translation && card.english_word && card.explanation) {
            setFormValues({
                translation: card.translation,
                english_word: card.english_word,
                explanation: card.explanation,
            });
        }
    }, [card, setFormValues]);

    const handleUpdate = useCallback(() => {
        if (!token || !cardId || !deckId) return;
        dispatch(
            editCard({
                token,
                data: {
                    id: cardId,
                    deck_id: deckId,
                    explanation: formValues.explanation,
                    english_word: formValues.english_word,
                    translation: formValues.translation,
                },
                navigate,
            })
        );
    }, [navigate, token, cardId, deckId, dispatch, formValues]);

    const handleChangeFromValues = useCallback(
        (key: keyof FormValues, value: string) => {
            setFormValues((state) => ({ ...state, [key]: value }));
        },
        []
    );

    return (
        <div>
            {!card ? (
                <Navigate to="/error" replace={true} />
            ) : (
                <Container className={styles.container}>
                    <Page>
                        <Header hasBack>Редактирование карточки</Header>
                        <div className={styles.cardSides}>
                            <Card>
                                <TextTitle>Передняя сторона</TextTitle>
                                <div className={styles.cardContent}>
                                    <Input
                                        value={formValues.translation}
                                        id={'ruWord'}
                                        label="Слово на русском"
                                        onChange={(e) =>
                                            handleChangeFromValues(
                                                'translation',
                                                e.target.value
                                            )
                                        }
                                    ></Input>
                                    <TextArea
                                        value={formValues.explanation}
                                        onChange={(value) =>
                                            handleChangeFromValues(
                                                'explanation',
                                                value
                                            )
                                        }
                                        id={'description'}
                                        label="Обьяснение слова"
                                        rows={3}
                                    ></TextArea>
                                    {/* {card.img ? (
                                        <Image
                                            src={card.img}
                                            alt="cardImg"
                                        ></Image>
                                    ) : (
                                        <Button>Сгенерировать картинку</Button>
                                    )} */}
                                </div>
                            </Card>
                            <Card>
                                <TextTitle>Задняя сторона</TextTitle>
                                <div className={styles.cardContent}>
                                    <Input
                                        value={formValues.english_word}
                                        onChange={(e) =>
                                            handleChangeFromValues(
                                                'english_word',
                                                e.target.value
                                            )
                                        }
                                        id={'enWord'}
                                        label="Слово на английском"
                                    ></Input>
                                </div>
                            </Card>
                            <Button type="default">
                                Сгенерировать перевод
                            </Button>
                            <Button type="accent" onClick={handleUpdate}>
                                Сохранить
                            </Button>
                        </div>
                    </Page>
                </Container>
            )}
        </div>
    );
}
