import { NavLink, useNavigate, useParams } from 'react-router-dom';
import Card from 'components/Card';
import Container from 'components/Container';
import Header from 'components/Header';
import Input from 'components/Input';
import Page from 'components/Page';
import TextArea from 'components/TextArea';
import styles from './InterestEdit.module.css';
import Button from 'components/Button';
import { useCallback, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'redux-state';
import {
    createInterest,
    deleteInterest,
    getInterest,
    setInterest,
    updateInterest,
} from 'redux-state/actions';
import { InterestFormValues } from 'types';

export default function InterestEdit() {
    const { id } = useParams();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const token = useAppSelector((state) => state.auth);
    const interest = useAppSelector((state) => state.interest);

    const [formValues, setFormValues] = useState<InterestFormValues>({
        name: '',
        description: '',
    });

    useEffect(() => {
        if (!id || !token) return;
        dispatch(getInterest({ id, token }));
    }, [dispatch, id, token]);

    useEffect(() => {
        setFormValues({
            name: interest.name,
            description: interest.description,
        });
    }, [interest, setFormValues]);

    const handleChangeFromValues = useCallback(
        (key: keyof InterestFormValues, value: string) => {
            setFormValues((state) => ({ ...state, [key]: value }));
        },
        [setFormValues]
    );

    const handleUpdateInterest = useCallback(() => {
        if (!token || !id) return;
        dispatch(
            updateInterest({
                data: {
                    name: formValues.name,
                    description: formValues.description,
                    id,
                },
                navigate,
                token,
            })
        );
    }, [dispatch, navigate, token, formValues, id]);

    const handleDeleteInterest = useCallback(() => {
        if (!token || !id) return;
        dispatch(
            deleteInterest({
                data: id,
                navigate,
                token,
            })
        );
    }, [dispatch, navigate, token, formValues, id]);

    return (
        <div>
            <Container className={styles.container}>
                <Page>
                    <Header hasBack>Редактирование интереса</Header>
                    <div className={styles.cardSides}>
                        <Card>
                            <div className={styles.cardContent}>
                                <Input
                                    onChange={(e) =>
                                        handleChangeFromValues(
                                            'name',
                                            e.target.value
                                        )
                                    }
                                    id={'interest'}
                                    label="Интерес"
                                    value={formValues.name}
                                ></Input>
                                <TextArea
                                    onChange={(value) =>
                                        handleChangeFromValues(
                                            'description',
                                            value
                                        )
                                    }
                                    id={'description'}
                                    label="Описание"
                                    rows={5}
                                    value={formValues.description}
                                ></TextArea>
                            </div>
                        </Card>
                        <Button type="accent" onClick={handleUpdateInterest}>
                            Сохранить
                        </Button>
                        <NavLink to={'/profile/interests'}>
                            <Button type="default">Отменить</Button>
                        </NavLink>
                        <Button type="cancel" onClick={handleDeleteInterest}>
                            Удалить
                        </Button>
                    </div>
                </Page>
            </Container>
        </div>
    );
}
