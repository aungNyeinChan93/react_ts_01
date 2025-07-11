// import React, { useRef, useState } from 'react';
// import { funCounter } from '../../tests/overallTest';

// const FunctionCounter = () => {
//     // const { count, decrement, increment } = funCounter(0);

//     const counterRef = useRef(funCounter(100));
//     const [_, forceRefesh] = useState(0);

//     const handleIncrement = () => {
//         counterRef.current.increment();
//         forceRefesh(pre => pre + 1);
//     }
//     const handleDecrement = () => {
//         counterRef.current.decrement();
//         forceRefesh(pre => pre + 1);
//     }

//     return (
//         <React.Fragment>
//             <section>{counterRef.current.getCount()}</section>
//             <button type='button' onClick={handleIncrement}>+</button>
//             <button type='button' onClick={handleDecrement}>-</button>
//         </React.Fragment>
//     );
// };

// export default FunctionCounter;