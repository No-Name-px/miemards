import { PropsWithChildren } from 'react';
import Card from '../Card';
import IconAccent from '../IconAccent';
import styles from './CardIconed.module.css';

interface Props {
    icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>> | string;
    bgColor?: string;
}

export default function CardIconed(props: PropsWithChildren<Props>) {
    const { children, icon, bgColor } = props;
    return (
        <Card className={styles.card}>
            <IconAccent
                type="reverseColorized"
                icon={icon}
                className={styles.icon}
                colorFirst={bgColor}
                colorSecond={'var(--text-primary-on-dark)'}
            ></IconAccent>
            <div className={styles.content}>{children}</div>
        </Card>
    );
}
