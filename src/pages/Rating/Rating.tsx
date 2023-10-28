import { Outlet } from 'react-router-dom';
import Container from 'components/Container';
import Header from 'components/Header';
import Page from 'components/Page';
import TabsNav from 'components/TabsNav';
import styles from './Rating.module.css';
import { useMemo } from 'react';

export default function Rating() {
    const tabs = useMemo(
        () => [
            {
                name: 'День',
                url: 'day',
            },
            {
                name: 'Неделя',
                url: 'week',
            },
            {
                name: 'Все время',
                url: 'all-time',
            },
        ],
        []
    );
    return (
        <div>
            <Container>
                <Page className={styles.page}>
                    <Header>Рейтинг игроков</Header>
                    <TabsNav tabs={tabs} className={styles.tabNav}></TabsNav>
                    <Outlet></Outlet>
                </Page>
            </Container>
        </div>
    );
}
