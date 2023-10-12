import styles from './Container.module.css';

interface Props {}

export default function Container(props: React.PropsWithChildren<Props>) {
    const { children } = props;
    return <div className={styles.container}>{children}</div>;
}
