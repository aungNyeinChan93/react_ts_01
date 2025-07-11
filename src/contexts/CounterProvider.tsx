// import { createContext, useState, type ReactNode } from 'react';

// interface CounterContextProps {
//     count: number,
//     increment: () => void,
//     decrement(): void,
//     reset: () => void
// }

// export const CounterContext = createContext<CounterContextProps>({
//     count: 0,
//     increment: () => { },
//     decrement: () => { },
//     reset: () => { },
// })

// const CounterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
//     const [count, setCount] = useState<number>(0);
//     const increment = () => {
//         setCount(pre => pre + 1)
//     }
//     const decrement = () => {
//         setCount(pre => pre - 1)
//     }
//     const reset = () => {
//         setCount(0)
//     }
//     return (
//         <CounterContext.Provider value={{ count, decrement, increment, reset }}>
//             {children}
//         </CounterContext.Provider>
//     );
// };

// export default CounterProvider;