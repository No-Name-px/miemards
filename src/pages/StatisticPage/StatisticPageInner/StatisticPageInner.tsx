import { useMemo, useState } from 'react';
import Stats from '../../../mocks/statistic.json';
import { PeriodsStatistic } from '../../../types/statistic';
import CardIconed from '../../../components/CardIconed';
import TextTitle from '../../../components/TextTitle';
import Education from '../../../assets/icons/cap-academic.svg?react';
import Trophy from '../../../assets/icons/goblet.svg?react';
import Check from '../../../assets/icons/check.svg?react';
import Tools from '../../../assets/icons/pantone.svg?react';
import Gamepad from '../../../assets/icons/gamepad.svg?react';
import TextPrimary from '../../../components/TextPrimary';
import styles from './StatisticPageInner.module.css';

interface Props {
    tab: keyof PeriodsStatistic;
}

export default function StatisticPageInner(props: Props) {
    const { tab } = props;
    const [stats, setStats] = useState<PeriodsStatistic>(Stats);
    const currentStats = useMemo(() => stats[tab], [stats, tab]);

    return (
        <div className={styles.cardsContainer}>
            <CardIconed bgColor="var(--add-pallet-5)" icon={Education}>
                <TextTitle>{currentStats.wordsAll}</TextTitle>
                <TextPrimary>Слов изучено</TextPrimary>
            </CardIconed>
            <CardIconed bgColor="var(--add-pallet-4)" icon={Trophy}>
                <TextTitle>{currentStats.rating}</TextTitle>
                <TextPrimary>Место в рейтинге</TextPrimary>
            </CardIconed>
            <CardIconed bgColor="var(--add-pallet-3)" icon={Check}>
                <TextTitle>{currentStats.decksLearnedAll}</TextTitle>
                <TextPrimary>Колоды изучено полностью</TextPrimary>
            </CardIconed>
            <CardIconed bgColor="var(--add-pallet-2)" icon={Tools}>
                <TextTitle>{currentStats.decksLearnedPartly}</TextTitle>
                <TextPrimary>Колоды изучены частично</TextPrimary>
            </CardIconed>
            <CardIconed bgColor="var(--add-pallet-1)" icon={Gamepad}>
                <TextTitle>{currentStats.games}</TextTitle>
                <TextPrimary>Игры проведено</TextPrimary>
            </CardIconed>
        </div>
    );
}
