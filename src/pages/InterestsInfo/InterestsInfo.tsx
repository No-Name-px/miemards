import { NavLink, Navigate } from 'react-router-dom';
import Container from 'components/Container/Container';
import Page from 'components/Page/Page';
import Header from 'components/Header';
import { useEffect } from 'react';
import styles from './InterestsInfo.module.css';
import Card from 'components/Card';
import TextTitle from 'components/TextTitle';
import { useAppDispatch, useAppSelector } from 'redux-state';
import { getInterests } from 'redux-state/features/interests/slice';

export default function InterestsPage() {
    const dispatch = useAppDispatch();
    const token = useAppSelector((state) => state.auth);

    useEffect(() => {
        if (!token) return;
        dispatch(getInterests({ token }));
    }, [token, dispatch]);

    const interests = useAppSelector((state) => state.interests);

    return (
        <div>
            {!interests ? (
                <Navigate to="/error" replace={true} />
            ) : (
                <Container>
                    <Page>
                        <Header hasBack>Мои интересы</Header>
                        <div className={styles.cards}>
                            {Object.keys(interests).map((id) => (
                                <div key={id} className={styles.card}>
                                    <NavLink
                                        className={styles.cardLink}
                                        to={`${id}`}
                                    >
                                        <Card className={styles.card}>
                                            <TextTitle>
                                                {interests[id].name
                                                    ? interests[id].name
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
