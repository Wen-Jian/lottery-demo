import {
    TimerStoreReducerActionModel,
    TimerStoreState,
} from '~/models/storeModels/timerStoreModel';
import timerStoreActionType from '~/stores/childReducers/timer/timerStoreActionType';

const initialState = {
    restTime: 0,
    hasResult: false,
};

const timerStoreReducer = (
    state: TimerStoreState = initialState,
    action: TimerStoreReducerActionModel
) => {
    switch (action.type) {
        case timerStoreActionType.SET_TIMER:
            return {
                ...state,
                restTime: action.payload,
            };
        default:
            return state;
    }
};

export default timerStoreReducer;
