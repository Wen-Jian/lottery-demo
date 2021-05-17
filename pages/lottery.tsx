import { NextPage } from 'next';
import React from 'react';
import { useSelector } from 'react-redux';
import { GlobalStateModel } from '~/models/storeModels';
import LotteryComponent from '~/components/lottery';

const LotteryPage: NextPage = () => {
    const userState = useSelector((state: GlobalStateModel) => state.users);
    return <LotteryComponent />;
};

export default LotteryPage;
