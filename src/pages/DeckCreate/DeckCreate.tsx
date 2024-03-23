import Container from 'components/Container';
import Page from 'components/Page';
import Header from 'components/Header';
import styles from './DeckCreate.module.css';
import Input from 'components/Input';
import Button from 'components/Button';
import { useAppDispatch, useAppSelector } from 'redux-state';
import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextArea from 'components/TextArea';
import { UserActions, createDeck } from 'redux-state/actions';

interface FormValues {
    name: string;
    description: string;
}

export default function DeckPageCreate() {
    const dispatch = useAppDispatch();
    const token = useAppSelector((state) => state.auth);
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState<FormValues>({
        name: '',
        description: '',
    });

    const handleSubmit = useCallback(() => {
        if (!token) return;
        dispatch(
            createDeck({
                data: { ...formValues },
                navigate,
                token,
            })
        );
    }, [token, dispatch, navigate, formValues]);

    const handleOnChange = useCallback(
        (key: keyof FormValues, newValue: string) => {
            setFormValues((form) => ({
                ...form,
                [key]: newValue,
            }));
        },
        []
    );

    const handleGenerateDeck = useCallback(() => {
        if (!token || formValues.name === '') return;
        dispatch(
            UserActions.generateDeck({ data: formValues.name, token, navigate })
        );
    }, [token, formValues, navigate, dispatch]);

    return (
        <>
            <Container>
                <Page>
                    <Header hasBack>Создание колоды</Header>
                    <div className={styles.content}>
                        <Input
                            onChange={(e) =>
                                handleOnChange('name', e.target.value)
                            }
                            id="deckName"
                            label="Название колоды"
                        ></Input>
                        <TextArea
                            onChange={(value) =>
                                handleOnChange('description', value)
                            }
                            label="Описание"
                            id="deckDescription"
                            rows={2}
                        ></TextArea>
                    </div>
                    <div className={styles.buttons}>
                        <Button onClick={handleGenerateDeck}>
                            Сгенерировать колоду
                        </Button>
                        <Button type="accent" onClick={handleSubmit}>
                            Создать
                        </Button>
                    </div>
                </Page>
            </Container>
        </>
    );
}
