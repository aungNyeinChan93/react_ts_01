// import { createContext, useState, type ReactNode } from 'react';

// interface Theme {
//     type: string
// }

// export const ThemeContext = createContext()

// const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
//     const [theme, setTheme] = useState<Theme>({
//         type: 'dark'
//     })
//     return (
//         <ThemeContext.Provider value={{ theme, setTheme }}>
//             {children}
//         </ThemeContext.Provider>
//     );
// };

// export default ThemeProvider;