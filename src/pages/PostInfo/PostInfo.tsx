import { NavLink, Navigate } from 'react-router-dom';
import Container from 'components/Container/Container';
import Page from 'components/Page/Page';
import Header from 'components/Header';
import { useEffect } from 'react';
import styles from './PostInfo.module.css';
import Card from 'components/Card';
import TextTitle from 'components/TextTitle';
import { useAppDispatch, useAppSelector } from 'redux-state';
import { getPosts } from 'redux-state/features/posts/slice';

export default function PostsPage() {
    const dispatch = useAppDispatch();
    const token = useAppSelector((state) => state.auth);

    useEffect(() => {
        if (!token) return;
        dispatch(getPosts({ token }));
    }, [token, dispatch]);

    const posts = useAppSelector((state) => state.posts);

    return (
        <div>
            {!posts ? (
                <Navigate to="/error" replace={true} />
            ) : (
                <Container>
                    <Page>
                        <Header hasBack>Мои посты</Header>
                        <div className={styles.cards}>
                            {Object.keys(posts).map((id) => (
                                <div key={id} className={styles.card}>
                                    <NavLink
                                        className={styles.cardLink}
                                        to={`${id}`}
                                    >
                                        <Card className={styles.card}>
                                            <TextTitle>
                                                {posts[id].text.split('===')[0]
                                                    ? posts[id].text.split(
                                                          '==='
                                                      )[0]
                                                    : '-'}
                                            </TextTitle>
                                        </Card>
                                    </NavLink>
                                </div>
                            ))}
                        </div>
                    </Page>
                </Container>
            )}
        </div>
    );
}
