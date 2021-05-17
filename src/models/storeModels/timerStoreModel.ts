export interface TimerStoreState {
    restTime: number;
    hasResult: boolean;
}

export interface TimerStoreReducerActionModel {
    type: string;
    payload: number | boolean;
}
