import { useEffect, useMemo } from 'react';
import CardIconed from 'components/CardIconed';
import TextTitle from 'components/TextTitle';
import TextPrimary from 'components/TextPrimary';
import { TopPeriods } from 'types';
import styles from './RatingList.module.css';
import ProgressCounter from 'components/InfoAccent';
import { useAppDispatch, useAppSelector } from 'redux-state';
import { TopActions } from 'redux-state/actions';
import TextSecondary from 'components/TextSecondary';

interface Props {
    tab: keyof typeof TopPeriods;
}

export default function RatingPageInner(props: Props) {
    const { tab } = props;
    const top = useAppSelector((state) => state.top);
    const token = useAppSelector((state) => state.auth);
    const currentTop = useMemo(() => top && top[tab], [top, tab]);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!token) return;
        dispatch(TopActions.getTop({ token, period: tab }));
    }, [tab, token, dispatch]);

    return (
        <div className={styles.cardsContainer}>
            {currentTop &&
                (currentTop.length === 0 ? (
                    <TextSecondary className={styles.text}>
                        Пока топа за этот период нет, будь первым!
                    </TextSecondary>
                ) : (
                    currentTop.map((user, index) => (
                        <CardIconed
                            bgColor={`var(--add-pallet-${(index % 5) + 1})`}
                            icon={(index + 1).toString()}
                            key={`top-user-${index}`}
                        >
                            <div className={styles.header}>
                                <TextTitle>{user.username}</TextTitle>
                                <ProgressCounter
                                    className={styles.headerAddition}
                                >
                                    {user.words_learned} слов
                                </ProgressCounter>
                            </div>
                            <TextPrimary>{user.country}</TextPrimary>
                        </CardIconed>
                    ))
                ))}
        </div>
    );
}
