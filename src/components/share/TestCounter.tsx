import React, { useContext } from 'react';
import { CounterContext } from '../../contexts/CounterProvider';

const TestCounter = () => {
    const { count, increment, decrement, reset } = useContext(CounterContext)

    return (
        <React.Fragment>
            <section>
                {count}
                <button type='button' onClick={increment}>+</button>
                <button type='button' onClick={decrement}>-</button>
                <button type='button' onClick={reset}>Reset</button>
            </section>
        </React.Fragment>
    );
};

export default TestCounter;