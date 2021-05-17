import React, {
    FunctionComponent,
    useCallback,
    useEffect,
    useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '~/apiRequests/userApiRequsets';
import { setUsers } from '~/stores/childReducers/users/userStoreAction';
import { setTimer } from '~/stores/childReducers/timer/timerStoreAction';
import UserList from '~/components/lottery/UserList';
import Timer from '~/components/common/Timer';
import LotteryResult from '~/components/lotteryResult';
import { GlobalStateModel } from '~/models/storeModels';
import { setWinner } from '~/stores/childReducers/lotteryResult/lotteryResultStoreAction';
import lotteryStyle from '~/styles/lottery.module.scss';

const LotteryContainer: FunctionComponent = () => {
    const dispatch = useDispatch();
    const { winner } = useSelector(
        (state: GlobalStateModel) => state.lotteryResult
    );
    const { list } = useSelector((state: GlobalStateModel) => state.users);
    const [inputVal, setInputVal] = useState(0);
    const handleInputChange = (val: string) => {
        if (/[^0-9]/.test(val)) {
            return;
        }
        setInputVal(Number(val));
    };

    const resetTimer = () => {
        dispatch(setTimer(inputVal * 60));
    };

    const countDownCallback = useCallback(() => {
        const randomWinnerId = Math.floor(
            Math.random() * (list.length - 1) + 1
        );
        dispatch(setWinner(randomWinnerId));
    }, [dispatch, list]);

    useEffect(() => {
        (async () => {
            const users = await getAllUsers();
            dispatch(setUsers(users));
        })();
    }, []);

    if (!!winner) {
        return <LotteryResult />;
    }

    return (
        <div className={lotteryStyle.main_wrapper}>
            <div>
                <h1>抽獎時間</h1>
                <div>
                    <input
                        value={inputVal}
                        onChange={(e) => handleInputChange(e.target.value)}
                    />
                    <span>分鐘</span>
                    <button onClick={resetTimer}>設置</button>
                </div>
                <Timer countDownCallback={countDownCallback} />
            </div>
            <UserList />
        </div>
    );
};

export default LotteryContainer;
