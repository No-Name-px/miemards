import styles from './TextTitle.module.css';

interface Props {}

export default function TextTitle(props: React.PropsWithChildren<Props>) {
    const { children } = props;
    return (
        <>
            <h1 className={styles.title}>{children}</h1>
        </>
    );
}
