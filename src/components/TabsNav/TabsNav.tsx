import { NavLink } from 'react-router-dom';
import styles from './TabsNav.module.css';
import cn from 'classnames';
import { Tab } from '../../types/ui';

interface Props {
    className?: string;
    tabs: Tab[];
}

export default function TabsNav(props: Props) {
    const { className, tabs } = props;
    return (
        <nav className={cn(styles.nav, className)}>
            {tabs.map((tab, index) => (
                <NavLink
                    className={styles.link}
                    to={tab.url}
                    key={`tab-${index}`}
                >
                    {({ isActive }) => (
                        <button
                            className={cn(styles.button, {
                                [styles.active]: isActive,
                            })}
                        >
                            {tab.name}
                        </button>
                    )}
                </NavLink>
            ))}
        </nav>
    );
}
