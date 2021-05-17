import React, { FunctionComponent } from 'react';
import Image from 'next/image';

interface Props {
    winnerName: string;
}
const ResultInfoDisplay: FunctionComponent<Props> = ({ winnerName }) => {
    return (
        <>
            <div>
                <img src={'/images/winner.png'} width="100" height="100" />
            </div>
            <span>{winnerName}</span>
        </>
    );
};

export default React.memo(ResultInfoDisplay);
