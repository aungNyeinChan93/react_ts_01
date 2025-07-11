import React, { useContext } from 'react';
import GeneralContext from '../contexts/general/GeneralContext';

const MyCounter: React.FC = () => {
    const { count, increment, decrement } = useContext(GeneralContext)
    return (
        <React.Fragment>
            <section>
                {count}
                <button onClick={increment}> + </button>
                <button onClick={decrement}> - </button>
            </section>
        </React.Fragment>
    );
};

export default MyCounter;