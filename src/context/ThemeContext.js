import {useState, createContext, useContext} from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({children})=>{
    const[theme,SetTheme]=useState('Light');

    return(
        <ThemeContext.Provider value={[theme,SetTheme]}>
            {children}
        </ThemeContext.Provider>
    )
}

//custom hook
const useTheme=()=> useContext(ThemeContext)

export {useTheme,ThemeProvider};