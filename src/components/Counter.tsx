import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState<number>(0)
    return (
        <React.Fragment>
            <section>
                {count}
                <button type='button' onClick={() => setCount(pre => pre + 1)}>+</button>
            </section>
        </React.Fragment>
    );
};

export default Counter;