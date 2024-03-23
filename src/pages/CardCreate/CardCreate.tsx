import { useNavigate, useParams } from 'react-router-dom';
import Card from 'components/Card';
import Container from 'components/Container';
import Header from 'components/Header';
import Input from 'components/Input';
import Page from 'components/Page';
import TextArea from 'components/TextArea';
import TextTitle from 'components/TextTitle';
import styles from './CardCreate.module.css';
import Button from 'components/Button';
import Image from 'components/Image';
import { useCallback, useEffect, useState } from 'react';
import { CardFormValues, CreateCard } from 'types';
import { useAppDispatch, useAppSelector } from 'redux-state';
import {
    createCard,
    getImage,
    getTranslation,
    setCard,
} from 'redux-state/actions';

export default function CardPageEdit() {
    const { deckId: deck_id } = useParams();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const token = useAppSelector((state) => state.auth);
    const card = useAppSelector((state) => state.card);

    const [formValues, setFormValues] = useState<CardFormValues>({
        english_word: '',
        translation: '',
        explanation: '',
    });

    useEffect(() => {
        dispatch(
            setCard({
                english_word: '',
                translation: '',
                deck_id: '',
                explanation: '',
                id: '',
            })
        );
    }, [dispatch]);

    useEffect(() => {
        if (deck_id) {
            setFormValues({
                translation: card.translation,
                english_word: card.english_word,
                explanation: card.explanation,
                image: card.image,
            });
        }
    }, [card, setFormValues, deck_id]);

    const handleChangeFromValues = useCallback(
        (key: keyof CreateCard, value: string) => {
            setFormValues((state) => ({ ...state, [key]: value }));
        },
        [setFormValues]
    );

    const handleCreateCard = useCallback(() => {
        if (!token || !deck_id) return;
        dispatch(
            createCard({
                data: {
                    deck_id,
                    explanation: formValues.explanation,
                    english_word: formValues.english_word,
                    translation: formValues.translation,
                    image: formValues.image ?? null,
                },
                navigate,
                token,
            })
        );
    }, [dispatch, navigate, token, formValues, deck_id]);

    const handleGetTranslation = useCallback(() => {
        if (!token || formValues.translation === '') return;
        dispatch(getTranslation({ card: formValues, token }));
    }, [token, dispatch, formValues]);

    const handleGetImage = useCallback(() => {
        if (!token || formValues.translation === '') return;
        dispatch(getImage({ card: formValues, token }));
    }, [token, dispatch, formValues]);

    return (
        <div>
            <Container className={styles.container}>
                <Page>
                    <Header hasBack>Создание карточки</Header>
                    <div className={styles.cardSides}>
                        <Card>
                            <TextTitle>Передняя сторона</TextTitle>
                            <div className={styles.cardContent}>
                                <Input
                                    onChange={(e) =>
                                        handleChangeFromValues(
                                            'translation',
                                            e.target.value
                                        )
                                    }
                                    id={'ruWord'}
                                    label="Перевод"
                                    value={formValues.translation}
                                ></Input>
                                <TextArea
                                    onChange={(value) =>
                                        handleChangeFromValues(
                                            'explanation',
                                            value
                                        )
                                    }
                                    id={'description'}
                                    label="Обьяснение слова"
                                    rows={3}
                                    value={formValues.explanation}
                                ></TextArea>
                                {card.image ? (
                                    <Image
                                        src={card.image}
                                        alt="cardImg"
                                    ></Image>
                                ) : (
                                    <Button onClick={handleGetImage}>
                                        Сгенерировать картинку
                                    </Button>
                                )}
                            </div>
                        </Card>
                        <Card>
                            <TextTitle>Задняя сторона</TextTitle>
                            <div className={styles.cardContent}>
                                <Input
                                    onChange={(e) =>
                                        handleChangeFromValues(
                                            'english_word',
                                            e.target.value
                                        )
                                    }
                                    id={'enWord'}
                                    label="Слово на английском"
                                    value={formValues.english_word}
                                ></Input>
                            </div>
                        </Card>

                        <Button type="default" onClick={handleGetTranslation}>
                            Сгенерировать перевод
                        </Button>
                        <Button type="accent" onClick={handleCreateCard}>
                            Сохранить
                        </Button>
                    </div>
                </Page>
            </Container>
        </div>
    );
}
