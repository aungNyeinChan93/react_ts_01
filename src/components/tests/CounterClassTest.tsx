// import React, { useRef, useState } from 'react';
// import { Counter } from '../../tests/overallTest';

// const CounterClassTest = () => {
//     const counterRef = useRef(new Counter(0));
//     const [_, forceUpdate] = useState(0); // used to force re-render

//     const handleIncrement = () => {
//         counterRef.current.increment();
//         forceUpdate(prev => prev + 1);
//     };

//     const handleDecrement = () => {
//         counterRef.current.decrement();
//         forceUpdate(prev => prev + 1);
//     };
//     return (
//         <React.Fragment>
//             <section>
//                 <h3 style={{ fontSize: '20px' }}>{counterRef.current.getCount()}</h3>
//                 <button type='button' onClick={handleDecrement}> -</button>
//                 <button type='button' onClick={handleIncrement}> +</button>
//             </section>
//         </React.Fragment>
//     );
// };

// export default CounterClassTest;