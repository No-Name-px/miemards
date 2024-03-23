import { NavLink, useNavigate, useParams } from 'react-router-dom';
import Card from 'components/Card';
import Container from 'components/Container';
import Header from 'components/Header';
import Input from 'components/Input';
import Page from 'components/Page';
import TextArea from 'components/TextArea';
import styles from './InterestCreate.module.css';
import Button from 'components/Button';
import { useCallback, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'redux-state';
import { createInterest, setInterest } from 'redux-state/actions';
import { InterestFormValues } from 'types';

export default function InterestCreate() {
    // const { id } = useParams();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const token = useAppSelector((state) => state.auth);
    const interest = useAppSelector((state) => state.interest);

    const [formValues, setFormValues] = useState<InterestFormValues>({
        name: '',
        description: '',
    });

    useEffect(() => {
        dispatch(
            setInterest({
                name: '',
                description: '',
            })
        );
    }, [dispatch]);

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

    const handleCreateInterest = useCallback(() => {
        if (!token) return;
        dispatch(
            createInterest({
                data: {
                    name: formValues.name,
                    description: formValues.description,
                },
                navigate,
                token,
            })
        );
    }, [dispatch, navigate, token, formValues]);

    return (
        <div>
            <Container className={styles.container}>
                <Page>
                    <Header hasBack>Создание интереса</Header>
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
                        <Button type="accent" onClick={handleCreateInterest}>
                            Создать
                        </Button>
                        <NavLink to={'/profile/interests'}>
                            <Button type="default" onClick={() => {}}>
                                Отменить
                            </Button>
                        </NavLink>
                        {/* <Button type="cancel" onClick={() => {}}>
                            Удалить
                        </Button> */}
                    </div>
                </Page>
            </Container>
        </div>
    );
}
