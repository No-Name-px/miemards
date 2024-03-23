import { NavLink, useNavigate } from 'react-router-dom';
import Card from 'components/Card';
import Container from 'components/Container';
import Header from 'components/Header';
import Input from 'components/Input';
import Page from 'components/Page';
import TextArea from 'components/TextArea';
import styles from './PostCreate.module.css';
import Button from 'components/Button';
import { useCallback, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'redux-state';
import { createPost, setPost } from 'redux-state/actions';
import { PostsForm } from 'types';

export default function PostCreate() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const token = useAppSelector((state) => state.auth);
    const post = useAppSelector((state) => state.post);

    const [formValues, setFormValues] = useState<PostsForm>({
        text: '',
        title: '',
    });

    useEffect(() => {
        dispatch(
            setPost({
                title: '',
                text: '',
            })
        );
    }, [dispatch]);

    useEffect(() => {
        setFormValues({
            title: '',
            text: '',
        });
    }, [post, setFormValues]);

    const handleChangeFromValues = useCallback(
        (key: keyof PostsForm, value: string) => {
            setFormValues((state) => ({ ...state, [key]: value }));
        },
        [setFormValues]
    );

    const handleCreatePost = useCallback(() => {
        if (!token) return;
        dispatch(
            createPost({
                data: {
                    text: formValues.title + '===' + formValues.text,
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
                    <Header hasBack>Написание поста</Header>
                    <div className={styles.cardSides}>
                        <Card>
                            <div className={styles.cardContent}>
                                <Input
                                    onChange={(e) =>
                                        handleChangeFromValues(
                                            'title',
                                            e.target.value
                                        )
                                    }
                                    id={'post'}
                                    label="Заголовок"
                                    value={formValues.title}
                                ></Input>
                                <TextArea
                                    onChange={(value) =>
                                        handleChangeFromValues('text', value)
                                    }
                                    id={'description'}
                                    label="Описание"
                                    rows={7}
                                    value={formValues.text}
                                ></TextArea>
                            </div>
                        </Card>
                        <Button type="accent" onClick={handleCreatePost}>
                            Создать
                        </Button>
                        <NavLink to={'/profile/posts'}>
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
