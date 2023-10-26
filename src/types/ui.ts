export enum ButtonTypeEnum {
    default = 'default',
    accent = 'accent',
    cancel = 'cancel',
    accept = 'accept',
}

export enum ButtonSizeEnum {
    s = 's',
    m = 'm',
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
