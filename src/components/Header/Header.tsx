import { NavLink } from 'react-router-dom';
import BackArrow from '../../assets/icons/chevron-left.svg?react';
import Edit from '../../assets/icons/edit-s.svg?react';
import IconAccent from '../IconAccent';
import Title from '../Title';
import styles from './Header.module.css';

interface Props {
    hasBack?: boolean;
    hasEdit?: boolean;
}

export default function Header(props: React.PropsWithChildren<Props>) {
    const { hasBack = false, hasEdit = false, children } = props;
    return (
        <div className={styles.header}>
            {hasBack && (
                <NavLink
                    to=".."
                    relative="path"
                    className={styles.iconContainer}
                >
                    <BackArrow fill="var(--accent-1)"></BackArrow>
                </NavLink>
            )}
            <Title className={styles.title}>{children}</Title>
            {hasEdit && (
                <NavLink to="edit">
                    <IconAccent
                        icon={Edit}
                        size="s"
                        type="reverseColorized"
                        colorSecond="var(--text-primary)"
                        className={styles.edit}
                    ></IconAccent>
                </NavLink>
            )}
        </div>
    );
}
