import userReducer from '~/stores/childReducers/users/userStoreReducer';
import timerStoreReducer from '~/stores/childReducers/timer/timerStoreReducer';
import lotteryResultStoreReducer from '~/stores/childReducers/lotteryResult/lotteryResultStoreReducer';
export default {
    users: userReducer,
    timer: timerStoreReducer,
    lotteryResult: lotteryResultStoreReducer,
};
