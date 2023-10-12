import styles from './Title.module.css';

interface Props {}

export default function Title(props: React.PropsWithChildren<Props>) {
    const { children } = props;
    return (
        <>
            <h1 className={styles.title}>{children}</h1>
        </>
    );
}
