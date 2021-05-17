import userStoreActionType from './userStoreActionType';
import { UserInfo } from '~/models/storeModels/userStoreModel';

export const setUsers = (payload: UserInfo[]) => {
    return {
        type: userStoreActionType.SET_USERS_INFO,
        payload: payload,
    };
};
