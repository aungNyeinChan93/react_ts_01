import React from 'react';
import { type UserInfo } from '../assets/types/types';


type UserInfoProps = UserInfo & {
    test: string
}

const UserInfo: React.FC<UserInfoProps> = ({ name, age, test }) => {
    return (
        <React.Fragment>
            <section>
                <p> My name is {name}. I am {age} years old!</p>
                <h1 className='text-red-400 text-2xl'>{test}</h1>
            </section>
        </React.Fragment>
    );
};

export default UserInfo;