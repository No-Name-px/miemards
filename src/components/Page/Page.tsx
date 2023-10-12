import styles from './Page.module.css';

interface Props {}

export default function Page(props: React.PropsWithChildren<Props>) {
    const { children } = props;
    return <div className={styles.page}>{children}</div>;
}
