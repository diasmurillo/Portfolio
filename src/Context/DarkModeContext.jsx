import { createContext, useContext, useState } from "react"

const DarkModeContext = createContext()

export function DarkModeProvider({children}) {
    
    const [darkMode, setDarkMode] = useState('')

    return (
        <DarkModeContext.Provider value={{darkMode, setDarkMode}}>
            {children}
        </DarkModeContext.Provider>
    )
}

export function useDarkMode() {
    return useContext(DarkModeContext)
}