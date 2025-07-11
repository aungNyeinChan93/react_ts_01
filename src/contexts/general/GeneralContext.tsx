import { createContext } from "react";

type GeneralContextProps = {
    count: number,
    increment: () => void,
    decrement: () => void
}

const GeneralContext = createContext<GeneralContextProps>({
    count: 0,
    decrement: () => { },
    increment: () => { },
});

export default GeneralContext;