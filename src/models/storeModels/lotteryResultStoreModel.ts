export interface LotteryResultStoreModel {
    winner: number | null;
}

export interface LotteryResultStoreReducerActionModel {
    type: string;
    payload: number | null;
}
