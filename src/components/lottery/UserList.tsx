import React from 'react';
import { useSelector } from 'react-redux';
import { GlobalStateModel } from '~/models/storeModels';
import lotteryStyle from '~/styles/lottery.module.scss';

const UserList = () => {
    const { list } = useSelector((state: GlobalStateModel) => state.users);
    return (
        <div>
            <h1>參與抽獎名單</h1>
            <div className={lotteryStyle.user_info_list_wrapper}>
                {list.map((obj, index) => {
                    return (
                        <li key={index}>
                            <span>{obj.id}</span>
                            <span className={lotteryStyle.user_name}>
                                {obj.name}
                            </span>
                        </li>
                    );
                })}
            </div>
        </div>
    );
};

export default React.memo(UserList);
