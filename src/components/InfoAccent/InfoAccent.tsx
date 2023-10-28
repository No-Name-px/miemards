import styles from './InfoAccent.module.css';
import cn from 'classnames';

interface Props {
    className?: string;
}

export default function InfoAccent(props: React.PropsWithChildren<Props>) {
    const { children, className } = props;
    return (
        <div className={cn(styles.progressCounter, className)}>{children}</div>
    );
}
