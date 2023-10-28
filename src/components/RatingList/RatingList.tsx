import { useMemo, useState } from 'react';
import MockedTop from '../../mocks/top.json';
import CardIconed from '../CardIconed';
import TextTitle from '../TextTitle';
import TextPrimary from '../TextPrimary';
import { PeriodTop } from '../../types/top';
import styles from './RatingList.module.css';
import ProgressCounter from '../ProgressCounter';

interface Props {
    tab: keyof PeriodTop;
}

export default function RatingPageInner(props: Props) {
    const { tab } = props;
    const [top] = useState<PeriodTop>(MockedTop);
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
