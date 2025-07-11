import React, { useReducer } from 'react';

type Action = { type: 'increment' } | { type: 'decrement' }

const CounterReducer = () => {
    const reducer = (state: { count: number }, action: Action): Partial<{ count: number }> => {
        switch (action.type) {
            case 'increment':
                return { ...state, count: state.count + 1 }
            case 'decrement':
                return { ...state, count: state.count - 1 }
            default:
                return state;
        }
    }

    const [counterState, counterDispatch] = useReducer(reducer, { count: 0 });


    return (
        <React.Fragment>
            <section>
                {counterState.count}

                <button type='button' onClick={() => counterDispatch({ type: 'increment' })}>+</button>
                <button type='button' onClick={() => counterDispatch({ type: 'decrement' })}>-</button>
            </section>
        </React.Fragment>
    );
};

export default CounterReducer;