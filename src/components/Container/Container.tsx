import styles from './Container.module.css';
import cn from 'classnames';

interface Props {
    className?: string;
}

export default function Container(props: React.PropsWithChildren<Props>) {
    const { children, className } = props;
    return <div className={cn(styles.container, className)}>{children}</div>;
}
