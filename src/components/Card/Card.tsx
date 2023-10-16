import styles from './Card.module.css';
import cm from 'classnames';

interface Props {
    className?: string;
}

export default function Card(props: React.PropsWithChildren<Props>) {
    const { children, className } = props;
    return <div className={cm(styles.card, className)}>{children}</div>;
}
