import styles from './Navbar.module.css';
import cs from 'classnames';
import NavButton from '../NavButton';
import { NavLink } from 'react-router-dom';
import User from '../../assets/icons/user-male.svg?react';
import Analytic from '../../assets/icons/chart-grow.svg?react';
import Rating from '../../assets/icons/goblet.svg?react';
import Decks from '../../assets/icons/home.svg?react';
import { ActionButtonProvider } from '../ActionButton';

interface Props {
    className?: string;
}

export default function Navbar(props: Props) {
    const { className } = props;
    return (
        <div className={cs(styles.navbar, className)}>
            <NavLink to="/decks" className={styles.navItem}>
                {({ isActive }) => (
                    <NavButton
                        title="Колоды"
                        icon={Decks}
                        isActive={isActive}
                    ></NavButton>
                )}
            </NavLink>
            <NavLink to="/rating" className={styles.navItem}>
                {({ isActive }) => (
                    <NavButton
                        title="Рейтинг"
                        icon={Rating}
                        isActive={isActive}
                    ></NavButton>
                )}
            </NavLink>
            <ActionButtonProvider></ActionButtonProvider>
            <NavLink to="/statistic" className={styles.navItem}>
                {({ isActive }) => (
                    <NavButton
                        title="Аналитика"
                        icon={Analytic}
                        isActive={isActive}
                    ></NavButton>
                )}
            </NavLink>
            <NavLink to="/profile" className={styles.navItem}>
                {({ isActive }) => (
                    <NavButton
                        title="Профиль"
                        icon={User}
                        isActive={isActive}
                    ></NavButton>
                )}
            </NavLink>
        </div>
    );
}
