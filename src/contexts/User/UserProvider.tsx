import React, { useState, type ReactNode } from 'react';
import { UserContext, type Profile } from './UserContext';

interface UserProviderProps {
    children: ReactNode
}

const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
    const [profile, setProfile] = useState<Profile>({
        name: '',
        email: '',
        password: '',
        role: 'user'
    })

    const getName = () => {
        return profile.name;
    }

    const getRole = () => {
        console.log(profile!.role);
    }

    const setName = (newName: string) => {
        setProfile(pre => ({ ...pre, name: newName }))
    }

    return (
        <UserContext.Provider value={{ profile, getName, getRole, setName }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;