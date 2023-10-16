import { useMemo } from 'react';
import { IconAccentSizeEnum, IconAccentTypeEnum } from '../../types/ui.d';
import styles from './IconAccent.module.css';
import cn from 'classnames';

interface Props {
    icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    colorFirst?: string;
    colorSecond?: string;
    type?: keyof typeof IconAccentTypeEnum;
    size?: keyof typeof IconAccentSizeEnum;
    className?: string;
}

interface ColorScheme {
    iconColor: string;
    backgroundColor: string;
}

type ColorSchemeMap = Record<keyof typeof IconAccentTypeEnum, ColorScheme>;

export default function IconAccent(props: Props) {
    const {
        icon: Icon,
        type = IconAccentTypeEnum['colorized'],
        colorFirst = 'var(--accent-1)',
        colorSecond = 'var(--background-color-secondary)',
        size = IconAccentSizeEnum['m'],
        className,
    } = props;

    const colorSchemeMap: ColorSchemeMap = useMemo(
        () => ({
            colorized: {
                iconColor: colorFirst,
                backgroundColor: colorSecond,
            },
            reverseColorized: {
                iconColor: colorSecond,
                backgroundColor: colorFirst,
            },
        }),
        [colorFirst, colorSecond]
    );

    return (
        <div
            className={cn(styles.container, className, {
                [styles.sizeS]: size === IconAccentSizeEnum['s'],
                [styles.sizeM]: size === IconAccentSizeEnum['m'],
            })}
            style={{ backgroundColor: colorSchemeMap[type].backgroundColor }}
        >
            <Icon fill={colorSchemeMap[type].iconColor}></Icon>
        </div>
    );
}
