import { createContext } from "react";

type role = 'user' | 'admin' | 'superAdmin '

export interface UserContextProps {
    profile: Profile,
    getName(): string,
    setName(newName: string): void,
    getRole: () => void,
}

export interface Profile {
    name: string,
    email: string,
    role: role,
    password?: string | number
}

export const UserContext = createContext<Partial<UserContextProps>>({
    profile: {
        name: '',
        email: '',
        role: 'user',
        password: ''
    },
    // getName(): string {
    //     return '';
    // },
    getName: (): string => {
        return '';
    },
    getRole: () => { },
    setName: () => { }
});


