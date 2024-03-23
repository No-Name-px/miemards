import { NavLink, useNavigate, useParams } from 'react-router-dom';
import Card from 'components/Card';
import Container from 'components/Container';
import Header from 'components/Header';
import Input from 'components/Input';
import Page from 'components/Page';
import TextArea from 'components/TextArea';
import styles from './PostEdit.module.css';
import Button from 'components/Button';
import { useCallback, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'redux-state';
import { deletePost, getPost, updatePost } from 'redux-state/actions';
import { PostsForm } from 'types';

export default function PostEdit() {
    const { id } = useParams();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const token = useAppSelector((state) => state.auth);
    const post = useAppSelector((state) => state.post);

    const [formValues, setFormValues] = useState<PostsForm>({
        title: '',
        text: '',
    });

    useEffect(() => {
        if (!id || !token) return;
        dispatch(getPost({ id, token }));
    }, [dispatch, id, token]);

    useEffect(() => {
        setFormValues({
            title: post.title,
            text: post.text,
        });
    }, [post, setFormValues]);

    const handleChangeFromValues = useCallback(
        (key: keyof PostsForm, value: string) => {
            setFormValues((state) => ({ ...state, [key]: value }));
        },
        [setFormValues]
    );

    const handleUpdatePost = useCallback(() => {
        if (!token || !id) return;
        dispatch(
            updatePost({
                data: {
                    id,
                    text: formValues.title + '===' + formValues.text,
                },
                navigate,
                token,
            })
        );
    }, [dispatch, navigate, token, formValues, id]);

    const handleDeletePost = useCallback(() => {
        if (!token || !id) return;
        dispatch(
            deletePost({
                data: id,
                navigate,
                token,
            })
        );
    }, [dispatch, navigate, token, id]);

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
                                    id={'Текст'}
                                    label="Описание"
                                    rows={7}
                                    value={formValues.text}
                                ></TextArea>
                            </div>
                        </Card>
                        <Button type="accent" onClick={handleUpdatePost}>
                            Сохранить
                        </Button>
                        <NavLink to={'/profile/posts'}>
                            <Button type="default">Отменить</Button>
                        </NavLink>
                        <Button type="cancel" onClick={handleDeletePost}>
                            Удалить
                        </Button>
                    </div>
                </Page>
            </Container>
        </div>
    );
}
