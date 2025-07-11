import React, { useState, type ReactNode } from 'react';
import GeneralContext from './GeneralContext';

type GeneralProviderProps = {
    children: ReactNode,
    name: string | undefined
}

const GeneralProvider: React.FC<GeneralProviderProps> = ({ children, name = '' }) => {
    const [count, setCount] = useState<number>(0);

    const increment = () => {
        setCount(pre => pre + 1)
    }
    const decrement = () => {
        setCount(pre => pre - 1)
    }

    console.log(name);

    return (
        <GeneralContext.Provider value={{ count, increment, decrement }}>
            {children}
        </GeneralContext.Provider>
    );
};

export default GeneralProvider;