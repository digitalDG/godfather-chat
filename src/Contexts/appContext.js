import { createContext, useState, useContext } from 'react';

const AppContext = createContext();

const AppContextProvider = ({children}) => {
    const [currentUserData, setCurrentUserData] = useState(null);

    return (
        <AppContext.Provider value={{currentUserData, setCurrentUserData}} >
            {children}
        </AppContext.Provider>
    );
};

const useAppContext = () => {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error("useAppContext must be used within a AppContextProvider");
    }

    return context;
};

export {AppContextProvider, useAppContext};