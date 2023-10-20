export interface Statistic {
    wordsAll: number;
    rating: number;
    decksLearnedPartly: number;
    decksLearnedAll: number;
    games: number;
}

export interface PeriodsStatistic {
    day: Statistic;
    week: Statistic;
    allTime: Statistic;
}
