import { useMemo, useState } from 'react';
import MockedTop from '../../../mocks/top.json';
import CardIconed from '../../../components/CardIconed';
import TextTitle from '../../../components/TextTitle';
import Education from '../../../assets/icons/cap-academic.svg?react';
import TextPrimary from '../../../components/TextPrimary';
import { PeriodTop } from '../../../types/top';
import styles from './RatingPageInner.module.css';
import ProgressCounter from '../../../components/ProgressCounter';

interface Props {
    tab: keyof PeriodTop;
}

export default function RatingPageInner(props: Props) {
    const { tab } = props;
    const [top, setTop] = useState<PeriodTop>(MockedTop);
    const currentTop = useMemo(() => top[tab], [top, tab]);

    return (
        <div className={styles.cardsContainer}>
            {currentTop.map((user, index) => (
                <CardIconed
                    bgColor={`var(--add-pallet-${(index % 5) + 1})`}
                    icon={(index + 1).toString()}
                    key={`top-user-${index}`}
                >
                    <div className={styles.header}>
                        <TextTitle>{user.name}</TextTitle>
                        <ProgressCounter className={styles.headerAddition}>
                            {user.words} слов
                        </ProgressCounter>
                    </div>
                    <TextPrimary>{user.country}</TextPrimary>
                </CardIconed>
            ))}
        </div>
    );
}
