import styles from './Page.module.css';
import cn from 'classnames';

interface Props {
    className?: string;
}

export default function Page(props: React.PropsWithChildren<Props>) {
    const { children, className } = props;
    return <div className={cn(styles.page, className)}>{children}</div>;
}
