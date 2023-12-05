export enum AnalyticsPeriods {
    today = 'today',
    week = 'week',
    allTime = 'allTime',
}

export interface GetAnalytics {
    token: string;
    period: keyof typeof AnalyticsPeriods;
}

export interface AnalyticsResp {
    total_words: number;
    ranking: number;
    fully_learned_decks: number;
    partly_learned_decks: number;
    games: number;
}

export interface AnalyticsItem {
    totalWords: number;
    ranking: number;
    fullyLearnedDecks: number;
    partlyLearnedDecks: number;
    games: number;
}

export interface Analytics {
    [AnalyticsPeriods.today]?: AnalyticsItem;
    [AnalyticsPeriods.week]?: AnalyticsItem;
    [AnalyticsPeriods.allTime]?: AnalyticsItem;
}
