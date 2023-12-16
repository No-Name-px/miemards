import { useEffect } from 'react';
import Container from 'components/Container';
import Header from 'components/Header';
import Page from 'components/Page';
import Card from 'components/Card';
import TextTitle from 'components/TextTitle';
import styles from './DecksInfo.module.css';
import IconAccent from 'components/IconAccent';
import Play from 'assets/icons/media-play.svg?react';
import { NavLink } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'redux-state';
import { getDecks } from 'redux-state/actions';

export default function Decks() {
    const dispatch = useAppDispatch();

    const token = useAppSelector((state) => state.auth);

    useEffect(() => {
        if (!token) return;
        dispatch(getDecks({ token }));
    }, [token, dispatch]);

    const decks = useAppSelector((state) => state.decks);

    return (
        <div>
            <Container>
                <Page>
                    <Header>Все колоды</Header>
                    <div className={styles.decks}>
                        {decks &&
                            Object.keys(decks).map((id) => (
                                <NavLink
                                    className={styles.cardLink}
                                    to={`${id}`}
                                    key={id}
                                >
                                    <Card className={styles.deckCard}>
                                        <div className={styles.cardContent}>
                                            <div className={styles.header}>
                                                <TextTitle>
                                                    {decks[id].name}
                                                </TextTitle>
                                                {/* <ProgressCounter
                                                    className={styles.progress}
                                                >
                                                    {decks[id].wordsLearned}/
                                                    {decks[id].wordsAll}
                                                </ProgressCounter> */}
                                            </div>
                                            <p className={styles.description}>
                                                {decks[id].description}
                                            </p>
                                        </div>
                                        <NavLink to={`${id}/play`}>
                                            <IconAccent
                                                className={styles.play}
                                                icon={Play}
                                            ></IconAccent>
                                        </NavLink>
                                    </Card>
                                </NavLink>
                            ))}
                    </div>
                </Page>
            </Container>
        </div>
    );
}
