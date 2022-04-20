import React, { createContext, useState } from 'react';

export const ViewLoginContext = createContext();

export const MostrarLoginContext = ({children}) => {
    const [isEnabled, setIsEnabled] = useState(false);  
    return(
        <ViewLoginContext.Provider value={{
            isEnabled, setIsEnabled
        }}>
            {children}
        </ViewLoginContext.Provider>
    )
}