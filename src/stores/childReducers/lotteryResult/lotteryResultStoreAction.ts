import lotteryResultStoreActionType from './lotteryResultStoreActionType';

export const setWinner = (payload: number | null) => {
    return {
        type: lotteryResultStoreActionType.SET_WINNER,
        payload,
    };
};
