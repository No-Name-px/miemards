import styles from './Title.module.css';
import cn from 'classnames';

interface Props {
    className: string;
}

export default function Title(props: React.PropsWithChildren<Props>) {
    const { children, className } = props;
    return (
        <>
            <h1 className={cn(styles.title, className)}>{children}</h1>
        </>
    );
}
