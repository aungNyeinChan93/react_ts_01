import React, { useContext } from 'react';
import { UserContext } from '../contexts/User/UserContext';

const Profile = () => {
    const { profile, setName, getName } = useContext(UserContext);
    console.log(profile);
    const name = getName!();
    return (
        <React.Fragment>
            <section>
                {profile?.name} || {name}
                {profile?.role}
            </section>

            <button type='button' onClick={() => setName!('aungnyeinchan')}>Add User Name</button>
        </React.Fragment>
    );
};

export default Profile;