import React, { FunctionComponent, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { timer } from 'rxjs';
import lotteryStyle from '~/styles/lottery.module.scss';
import { numberStringFormater } from '~/util/commonUtil';
import { GlobalStateModel } from '~/models/storeModels';
import { setTimer } from '~/stores/childReducers/timer/timerStoreAction';

interface Props {
    countDownCallback: () => void;
}

const Timer: FunctionComponent<Props> = ({ countDownCallback }) => {
    const { restTime } = useSelector((state: GlobalStateModel) => state.timer);
    const preRestTime = useRef(restTime);
    const dipatch = useDispatch();
    const seconds = restTime % 60;
    const mins = Math.floor((restTime / 60) % 60);
    const hrs = Math.floor(restTime / 3600);
    const source = timer(1000, 2000);

    useEffect(() => {
        const subscribe = source.subscribe(() => {
            if (restTime > 0) {
                dipatch(setTimer(restTime - 1));
            }
            if (preRestTime.current === 1 && restTime === 0) {
                countDownCallback();
            }
            preRestTime.current = restTime;
        });
        return () => {
            subscribe.unsubscribe();
        };
    }, [restTime]);

    return (
        <div className={lotteryStyle.timer_wrapper}>
            <span data-testid="timer_hrs">
                {numberStringFormater(`${hrs}`, 2)}:
            </span>
            <span data-testid="timer_mins">
                {numberStringFormater(`${mins}`, 2)}:
            </span>
            <span data-testid="timer_secs">
                {numberStringFormater(`${seconds}`, 2)}
            </span>
        </div>
    );
};

export default React.memo(Timer);
