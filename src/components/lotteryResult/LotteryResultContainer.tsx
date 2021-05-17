import React, { FunctionComponent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GlobalStateModel } from '~/models/storeModels';
import { UserInfo } from '~/models/storeModels/userStoreModel';
import { setWinner } from '~/stores/childReducers/lotteryResult/lotteryResultStoreAction';
import lotteryStyle from '~/styles/lottery.module.scss';
import ResultInfoDisplay from './ResultInfoDisplay';

const LotteryResultContainer: FunctionComponent = () => {
    const { winner } = useSelector(
        (state: GlobalStateModel) => state.lotteryResult
    );
    const { list } = useSelector((state: GlobalStateModel) => state.users);
    const dispatch = useDispatch();
    const winnerInfo = list.filter((obj: UserInfo) => {
        return obj.id === winner;
    })[0];

    const resetResult = () => {
        dispatch(setWinner(null));
    };

    return (
        <div className={lotteryStyle.result_wrapper}>
            <ResultInfoDisplay winnerName={winnerInfo.name} />
            <button onClick={resetResult}>重置</button>
        </div>
    );
};

export default LotteryResultContainer;
