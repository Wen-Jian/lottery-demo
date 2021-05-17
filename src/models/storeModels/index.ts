import { TimerStoreState } from './timerStoreModel';
import { UserStoreState } from './userStoreModel';
import { LotteryResultStoreModel } from './lotteryResultStoreModel';

export interface GlobalStateModel {
    users: UserStoreState;
    timer: TimerStoreState;
    lotteryResult: LotteryResultStoreModel;
}
