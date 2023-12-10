export interface TopItem {
    username: string;
    'words learned': string;
}

export enum TopPeriods {
    today = 'today',
    week = 'week',
    allTime = 'allTime',
}

export interface GetTops {
    token: string;
    period: keyof typeof TopPeriods;
}

export interface Top {
    [TopPeriods.today]?: TopItem[];
    [TopPeriods.week]?: TopItem[];
    [TopPeriods.allTime]?: TopItem[];
}
