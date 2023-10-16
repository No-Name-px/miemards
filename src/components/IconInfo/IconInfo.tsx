import { ReactNode } from 'react';
import IconAccent from '../IconAccent';
import styles from './IconInfo.module.css';
import { IconAccentSizeEnum, IconAccentTypeEnum } from '../../types/ui';

interface Props {
    icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    colorFirst?: string;
    colorSecond?: string;
    children: ReactNode[] | ReactNode;
    iconType?: keyof typeof IconAccentTypeEnum;
    iconSize?: keyof typeof IconAccentSizeEnum;
}

export default function IconInfo(props: Props) {
    const {
        icon: Icon,
        colorFirst,
        colorSecond,
        children,
        iconType,
        iconSize,
    } = props;
    return (
        <div className={styles.container}>
            <IconAccent
                icon={Icon}
                colorFirst={colorFirst}
                colorSecond={colorSecond}
                size={iconSize}
                type={iconType}
            ></IconAccent>
            <div className={styles.content}>{children}</div>
        </div>
    );
}
