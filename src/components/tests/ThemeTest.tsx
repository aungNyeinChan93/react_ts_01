// import React, { useContext } from 'react';
// import { ThemeContext } from '../../contexts/theme/ThemeProvider';

// const ThemeTest = () => {
//     const { theme, setTheme } = useContext(ThemeContext);
//     console.log(theme.type);


//     const changeTheme = () => {
//         if (theme.type === 'dark') {
//             setTheme(pre => ({ ...pre, type: 'light' }))
//         }
//         else {
//             setTheme(pre => ({ ...pre, type: 'dark' }))
//         }
//     }

//     return (
//         <React.Fragment>
//             <section>
//                 <h1>{theme.type}</h1>
//                 <button type='button' onClick={changeTheme}>Change Theme </button>
//             </section>
//         </React.Fragment>
//     );
// };

// export default ThemeTest; 