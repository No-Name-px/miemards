import styles from './ActionButton.module.css';

interface Props {
    title?: string;
    icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

export default function ActionButton(props: Props) {
    const { title, icon: Icon } = props;
    return (
        <div className={styles.button}>
            {Icon && <Icon className={styles.icon}></Icon>}
            <p className={styles.title}>{title}</p>
        </div>
    );
}
