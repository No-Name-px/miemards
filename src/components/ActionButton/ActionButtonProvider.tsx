import { NavLink, Route, Routes, useParams } from 'react-router-dom';
import ActionButton from './ActionButton';
import Plus from '../../assets/icons/plus.svg?react';
import Play from '../../assets/icons/media-play.svg?react';
import styles from './ActionButtonProvider.module.css';

export default function ActionButtonProvider() {
    const deckId = useParams()?.id;
    return (
        <Routes>
            <Route
                path="decks"
                element={
                    <NavLink to="create" className={styles.link}>
                        <ActionButton title="Колоду" icon={Plus} />
                    </NavLink>
                }
            />
            <Route
                path="decks/:deckId/edit"
                element={
                    <NavLink
                        to={`/decks/${deckId}/cards/create`}
                        className={styles.link}
                    >
                        <ActionButton title="Слово" icon={Plus} />
                    </NavLink>
                }
            />
            <Route
                path="decks/:deckId"
                element={
                    <NavLink to="play" className={styles.link}>
                        <ActionButton title="Играть" icon={Play} />
                    </NavLink>
                }
            />
            <Route
                path="profile/interests"
                element={
                    <NavLink to="create" className={styles.link}>
                        <ActionButton title="Интерес" icon={Plus} />
                    </NavLink>
                }
            />
            <Route
                path="profile/posts"
                element={
                    <NavLink to="create" className={styles.link}>
                        <ActionButton title="Запись" icon={Plus} />
                    </NavLink>
                }
            />
            <Route
                path="profile/bankCards"
                element={
                    <NavLink to="create" className={styles.link}>
                        <ActionButton title="Карту" icon={Plus} />
                    </NavLink>
                }
            />
            <Route path="decks/create" element={<ActionButton invisible />} />
            <Route path="*" element={<ActionButton invisible />}></Route>
        </Routes>
    );
}
