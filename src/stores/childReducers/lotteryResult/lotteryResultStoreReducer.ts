import {
    LotteryResultStoreModel,
    LotteryResultStoreReducerActionModel,
} from '~/models/storeModels/lotteryResultStoreModel';
import lotteryResultStoreActionType from './lotteryResultStoreActionType';

const initialState = {
    winner: null,
};

const lotteryResultStoreReducer = (
    state: LotteryResultStoreModel = initialState,
    action: LotteryResultStoreReducerActionModel
) => {
    switch (action.type) {
        case lotteryResultStoreActionType.SET_WINNER:
            return {
                ...state,
                winner: action.payload,
            };
        default:
            return state;
    }
};

export default lotteryResultStoreReducer;
