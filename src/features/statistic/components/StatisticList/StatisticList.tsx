import { useEffect, useMemo, useState } from 'react';
import { AnalyticsPeriods } from 'types';
import CardIconed from 'components/CardIconed';
import TextTitle from 'components/TextTitle';
import Education from 'assets/icons/cap-academic.svg?react';
import Trophy from 'assets/icons/goblet.svg?react';
import Check from 'assets/icons/check.svg?react';
import Tools from 'assets/icons/pantone.svg?react';
import Gamepad from 'assets/icons/gamepad.svg?react';
import TextPrimary from 'components/TextPrimary';
import styles from './StatisticList.module.css';
import { useAppDispatch, useAppSelector } from 'redux-state';
import { AnalyticsActions } from 'redux-state/actions';

interface Props {
    tab: keyof typeof AnalyticsPeriods;
}

export default function StatisticList(props: Props) {
    const { tab } = props;
    const analytics = useAppSelector((state) => state.analytics);
    const token = useAppSelector((state) => state.auth);
    const currentStats = useMemo(
        () => analytics && analytics[tab],
        [analytics, tab]
    );
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!token) return;
        dispatch(AnalyticsActions.getAnalytics({ token, period: tab }));
    }, [tab, token, dispatch]);

    return (
        <div className={styles.cardsContainer}>
            {currentStats && (
                <>
                    <CardIconed bgColor="var(--add-pallet-5)" icon={Education}>
                        <TextTitle>{currentStats.totalWords}</TextTitle>
                        <TextPrimary>Слов изучено</TextPrimary>
                    </CardIconed>
                    <CardIconed bgColor="var(--add-pallet-4)" icon={Trophy}>
                        <TextTitle>{currentStats.ranking}</TextTitle>
                        <TextPrimary>Место в рейтинге</TextPrimary>
                    </CardIconed>
                    <CardIconed bgColor="var(--add-pallet-3)" icon={Check}>
                        <TextTitle>{currentStats.fullyLearnedDecks}</TextTitle>
                        <TextPrimary>Колоды изучено полностью</TextPrimary>
                    </CardIconed>
                    <CardIconed bgColor="var(--add-pallet-2)" icon={Tools}>
                        <TextTitle>{currentStats.partlyLearnedDecks}</TextTitle>
                        <TextPrimary>Колоды изучены частично</TextPrimary>
                    </CardIconed>
                    <CardIconed bgColor="var(--add-pallet-1)" icon={Gamepad}>
                        <TextTitle>{currentStats.games}</TextTitle>
                        <TextPrimary>Игры проведено</TextPrimary>
                    </CardIconed>
                </>
            )}
        </div>
    );
}
