import styles from './TextTitle.module.css';
import cn from 'classnames';

interface Props {
    className?: string;
}

export default function TextTitle(props: React.PropsWithChildren<Props>) {
    const { children, className } = props;
    return (
        <>
            <h1 className={cn(styles.title, className)}>{children}</h1>
        </>
    );
}
