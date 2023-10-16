import styles from './NavButton.module.css';
import cn from 'classnames';

interface Props {
    title: string;
    icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    isActive?: boolean;
}

export default function NavButton(props: Props) {
    const { title, icon: Icon, isActive = false } = props;
    return (
        <div
            className={cn(styles.button, {
                [styles.active]: isActive,
            })}
        >
            <Icon
                fill={
                    isActive ? 'var(--accent-1-hover)' : 'var(--text-tetriary)'
                }
            ></Icon>
            <p className={styles.title}>{title}</p>
        </div>
    );
}
