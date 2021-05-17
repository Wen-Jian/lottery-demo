export interface UserInfo {
    name: string;
    id: number;
}

export interface UserStoreState {
    list: UserInfo[];
}

export interface UserStoreReducerActionModel {
    type: string;
    payload: UserInfo | UserInfo[];
}
