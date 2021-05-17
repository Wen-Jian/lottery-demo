import {
    UserStoreState,
    UserStoreReducerActionModel,
} from '~/models/storeModels/userStoreModel';
import userStoreActionType from './userStoreActionType';

const initialState: UserStoreState = {
    list: [],
};

const userStoreReducer = (
    state: UserStoreState = initialState,
    action: UserStoreReducerActionModel
) => {
    switch (action.type) {
        case userStoreActionType.SET_USERS_INFO:
            return {
                ...state,
                list: action.payload,
            };
        default:
            return state;
    }
};

export default userStoreReducer;
