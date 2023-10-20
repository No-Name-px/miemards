export enum ButtonTypeEnum {
    default = 'default',
    accent = 'accent',
}

export enum IconAccentTypeEnum {
    colorized = 'colorized',
    reverseColorized = 'reverseColorized',
}

export enum IconAccentSizeEnum {
    s = 's',
    m = 'm',
}

export interface Tab {
    name: string;
    url: string;
}
