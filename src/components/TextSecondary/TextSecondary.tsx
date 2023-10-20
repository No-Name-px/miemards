import styles from './TextSecondary.module.css';
import cn from 'classnames';

interface Props {
    className?: string;
}

export default function TextSecondary(props: React.PropsWithChildren<Props>) {
    const { children, className } = props;
    return (
        <>
            <p className={cn(styles.text, className)}>{children}</p>
        </>
    );
}
