import React from 'react';
import { type AdminInfo } from '../assets/types/types';

const AdminInfo: React.FC<AdminInfo> = ({ name, age, role, lastLogin }) => {
    return (
        <React.Fragment>
            <section>
                {name}
                {role}
                {age}
                {lastLogin.getTime()}
            </section>
        </React.Fragment>
    );
};

export default AdminInfo;