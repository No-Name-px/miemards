import { Navigate, useNavigate, useParams } from 'react-router-dom';
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
import { useCallback, useState } from 'react';
import { CreateCard } from 'types';
import { useAppDispatch, useAppSelector } from 'redux-state';
import { createCard } from 'redux-state/actions';

export default function CardPageEdit() {
    const { deckId: deck_id } = useParams();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const token = useAppSelector((state) => state.auth);

    const [formValues, setFormValues] = useState<CreateCard>({
        english_word: '',
        translation: '',
        explanation: '',
        deck_id: '',
    });

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
                    ...formValues,
                    deck_id,
                },
                navigate,
                token,
            })
        );
    }, [dispatch, navigate, token, formValues, deck_id]);

    return (
        <div>
            <Container className={styles.container}>
                <Page>
                    <Header hasBack>Редактирование карточки</Header>
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

                        {/* <Button type="accent">Сгенерировать перевод</Button> */}
                        <Button type="accent" onClick={handleCreateCard}>
                            Сохранить
                        </Button>
                    </div>
                </Page>
            </Container>
        </div>
    );
}
