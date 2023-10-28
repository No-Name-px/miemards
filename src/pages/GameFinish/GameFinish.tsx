import Container from 'components/Container';
import Header from 'components/Header';
import Page from 'components/Page';
import styles from './GameFinish.module.css';
import FinishCat from 'assets/pics/finishCat.svg?react';
import Education from 'assets/icons/cap-academic.svg?react';
import Done from 'assets/icons/check.svg?react';
import TextPrimary from 'components/TextPrimary';
import CardIconed from 'components/CardIconed';
import TextTitle from 'components/TextTitle';
import Button from 'components/Button';
import { NavLink } from 'react-router-dom';

export default function FinishPage() {
    return (
        <div>
            <Container className={styles.container}>
                <Page>
                    <Header>Поздравляем! Вы молодец</Header>
                    <div className={styles.content}>
                        <FinishCat></FinishCat>
                        <div className={styles.statContainer}>
                            <CardIconed
                                icon={Education}
                                bgColor={'var(--add-pallet-5)'}
                            >
                                <TextTitle>12</TextTitle>
                                <TextPrimary>Слов изучено</TextPrimary>
                            </CardIconed>
                            <CardIconed
                                icon={Done}
                                bgColor={'var(--add-pallet-4)'}
                            >
                                <TextTitle>20%</TextTitle>
                                <TextPrimary>
                                    Слов отвечено правильно
                                </TextPrimary>
                            </CardIconed>
                        </div>
                        <NavLink to={'/'} className={styles.link}>
                            <Button type="accent">На главную</Button>
                        </NavLink>
                    </div>
                </Page>
            </Container>
        </div>
    );
}
