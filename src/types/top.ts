export interface TopUser {
    name: string;
    words: number;
    country: string;
}

export interface PeriodTop {
    day: TopUser[];
    week: TopUser[];
    allTime: TopUser[];
}
