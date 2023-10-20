import styles from './ActionButton.module.css';
import cn from 'classnames';

interface Props {
    invisible?: boolean;
    title?: string;
    icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

export default function ActionButton(props: Props) {
    const { title, icon: Icon, invisible = false } = props;
    return (
        <div
            className={cn(styles.button, {
                [styles.invisible]: invisible,
            })}
        >
            {Icon && <Icon className={styles.icon}></Icon>}

            <p className={styles.title}>{title}</p>
        </div>
    );
}
