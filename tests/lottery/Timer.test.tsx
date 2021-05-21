import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Timer from '~/components/common/Timer';
import { Provider } from 'react-redux';
import store from '~/stores';
import { setTimer } from '~/stores/childReducers/timer/timerStoreAction';
import { sleep } from '../util/testUtil';
import { setWinner } from '~/stores/childReducers/lotteryResult/lotteryResultStoreAction';
describe('Timer Component testing', () => {
    beforeEach(() => {
        const callback = () => {
            store.dispatch(setWinner(1));
        };

        render(
            <Provider store={store}>
                <Timer countDownCallback={callback} />)
            </Provider>
        );
    });
    test('Should render content correctly', () => {
        expect(screen.getByTestId('timer_hrs')).toHaveTextContent('00');
        expect(screen.getByTestId('timer_mins')).toHaveTextContent('00');
        expect(screen.getByTestId('timer_secs')).toHaveTextContent('00');
    });

    describe('rest time is not 0', () => {
        test('timer display as expected', async () => {
            store.dispatch(setTimer(1));
            expect(screen.getByTestId('timer_hrs')).toHaveTextContent('00');
            expect(screen.getByTestId('timer_mins')).toHaveTextContent('00');
            expect(screen.getByTestId('timer_secs')).toHaveTextContent('01');
            store.dispatch(setTimer(30));
            expect(screen.getByTestId('timer_hrs')).toHaveTextContent('00');
            expect(screen.getByTestId('timer_mins')).toHaveTextContent('00');
            expect(screen.getByTestId('timer_secs')).toHaveTextContent('30');
            store.dispatch(setTimer(60));
            expect(screen.getByTestId('timer_hrs')).toHaveTextContent('00');
            expect(screen.getByTestId('timer_mins')).toHaveTextContent('01');
            expect(screen.getByTestId('timer_secs')).toHaveTextContent('00');
            store.dispatch(setTimer(330));
            expect(screen.getByTestId('timer_hrs')).toHaveTextContent('00');
            expect(screen.getByTestId('timer_mins')).toHaveTextContent('05');
            expect(screen.getByTestId('timer_secs')).toHaveTextContent('30');
            store.dispatch(setTimer(3600));
            expect(screen.getByTestId('timer_hrs')).toHaveTextContent('01');
            expect(screen.getByTestId('timer_mins')).toHaveTextContent('00');
            expect(screen.getByTestId('timer_secs')).toHaveTextContent('00');
        });

        test('callback function will be called', async () => {
            store.dispatch(setTimer(1));
            expect(screen.getByTestId('timer_hrs')).toHaveTextContent('00');
            expect(screen.getByTestId('timer_mins')).toHaveTextContent('00');
            expect(screen.getByTestId('timer_secs')).toHaveTextContent('01');
            await sleep(2000);
            expect(store.getState().lotteryResult.winner).toBe(1);
            expect(screen.getByTestId('timer_hrs')).toHaveTextContent('00');
            expect(screen.getByTestId('timer_mins')).toHaveTextContent('00');
            expect(screen.getByTestId('timer_secs')).toHaveTextContent('00');
        });
    });
});
