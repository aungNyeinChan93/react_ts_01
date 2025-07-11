// import React, { useState } from 'react';

// interface UserProfile {
//     name: string,
//     age: number,
//     email: string
// }

// const UserProfile = () => {
//     const [profile, setProfile] = useState<UserProfile>({
//         name: '',
//         age: 0,
//         email: ''
//     })
//     return (
//         <React.Fragment>
//             <section style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
//                 <div>
//                     <div style={{ border: '1px solid red', padding: '12px', borderRadius: "10px" }}>
//                         <input type="text" name="name" placeholder='name' style={{ display: 'block' }}
//                             value={profile.name} onChange={(e) => setProfile(pre => ({ ...pre, name: e.target.value }))} /> <br />
//                         <input type="text" name="email" placeholder='email' style={{ display: 'block' }}
//                             value={profile.email} onChange={(e) => setProfile(pre => ({ ...pre, email: e.target.value }))} /> <br />
//                         <input type="text" name="password" placeholder='name' style={{ display: 'block' }}
//                             value={profile.age} onChange={(e) => setProfile(pre => ({ ...pre, age: Number(e.target.value) }))} /> <br />
//                     </div>

//                     <div style={{ background: 'green', margin: "10px auto", borderRadius: '10px' }}>
//                         UserName : {profile.name} <br />
//                         Email : {profile.email} <br />
//                         Age : {profile.age} <br />

//                     </div>
//                 </div>
//             </section>
//         </React.Fragment>
//     );
// };

// export default UserProfile;