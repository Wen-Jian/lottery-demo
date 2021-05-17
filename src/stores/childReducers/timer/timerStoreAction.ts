import timerStoreActionType from './timerStoreActionType';

export const setTimer = (payload: number) => {
    return {
        type: timerStoreActionType.SET_TIMER,
        payload,
    };
};
