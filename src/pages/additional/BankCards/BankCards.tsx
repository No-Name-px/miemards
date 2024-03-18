import { useCallback, useEffect, useState } from 'react';
import Container from 'components/Container';
import Header from 'components/Header';
import Page from 'components/Page';
import Card from 'components/Card';
import TextTitle from 'components/TextTitle';
import styles from './BankCards.module.css';
import { useAppDispatch, useAppSelector } from 'redux-state';
import {
    createBankCard,
    editBankCard,
    getBankCards,
} from 'redux-state/actions';
import Button from 'components/Button';
import Input from 'components/Input';

interface FromVales {
    cvv: string;
    exp_date: string;
    number: string;
}

export default function Decks() {
    const dispatch = useAppDispatch();

    const token = useAppSelector((state) => state.auth);

    const [editItemId, setEditItemId] = useState<string | null>(null);

    const [formValues, setFormValues] = useState<FromVales>({
        number: '',
        exp_date: '',
        cvv: '',
    });

    useEffect(() => {
        if (!token) return;
        dispatch(getBankCards({ token }));
    }, [token, dispatch, editItemId]);

    const bankCards = useAppSelector((state) => state.bankCards);

    const handleConfirm = useCallback(() => {
        if (!token) return;
        if (editItemId) {
            dispatch(editBankCard({ token, ...formValues, id: editItemId }));
        } else {
            dispatch(createBankCard({ token, ...formValues }));
        }
        setEditItemId(null);
        dispatch(getBankCards({ token }));
        setFormValues({
            number: '',
            exp_date: '',
            cvv: '',
        });
    }, [dispatch, formValues, token, editItemId]);

    const handleEditItem = useCallback(
        (id: string) => {
            setEditItemId(id);
        },
        [setEditItemId]
    );

    const handleCancel = useCallback(() => {
        setEditItemId(null);
    }, [setEditItemId]);

    const handleEditForm = useCallback(
        (key: keyof FromVales, value: string) => {
            setFormValues((form) => ({
                ...form,
                [key]: value,
            }));
        },
        []
    );

    return (
        <div>
            <Container>
                <Page>
                    <Header>Банковские карты</Header>
                    <div className={styles.decks}>
                        <Input
                            label="Номер карты"
                            id="bankCardNumber"
                            type="number"
                            value={formValues.number}
                            onChange={(e) =>
                                handleEditForm('number', e.target.value)
                            }
                        ></Input>
                        <Input
                            label="CVV"
                            id="bankCardCvv"
                            type="number"
                            value={formValues.cvv}
                            onChange={(e) =>
                                handleEditForm('cvv', e.target.value)
                            }
                        ></Input>
                        <Input
                            label="Дата"
                            id="bankCardDate"
                            type="text"
                            value={formValues.exp_date}
                            onChange={(e) =>
                                handleEditForm('exp_date', e.target.value)
                            }
                        ></Input>
                        {!editItemId ? (
                            <Button type="accent" onClick={handleConfirm}>
                                Добавить
                            </Button>
                        ) : (
                            <>
                                <Button type="accent" onClick={handleConfirm}>
                                    Изменить
                                </Button>
                                <Button type="cancel" onClick={handleCancel}>
                                    Отмена
                                </Button>
                            </>
                        )}
                        {bankCards &&
                            Object.keys(bankCards).map((id) => (
                                <div
                                    key={id}
                                    onClick={() => handleEditItem(id)}
                                >
                                    <Card className={styles.deckCard}>
                                        <div className={styles.cardContent}>
                                            <div className={styles.header}>
                                                <TextTitle>
                                                    {bankCards[id].number}
                                                </TextTitle>
                                            </div>
                                        </div>
                                    </Card>
                                </div>
                            ))}
                    </div>
                </Page>
            </Container>
        </div>
    );
}
