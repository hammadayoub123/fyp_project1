import React, { createContext, useContext, useState } from 'react';

const DaoContext = createContext();

export const DaoProvider = ({ children }) => {
    const [daoAddress, setdaoAddress] = useState(""/* "0xfb134FDCDc7CaFe8c9515168Ad26e636af19a7D6" *//* "0x228bca96bd61ffA88483880bb871617622c31c6E" */);


    const setdao = (address) => {
        setdaoAddress(address);
    };

    console.log("Context value daoAddress:", { daoAddress }); // Log the context value

    return (
        <DaoContext.Provider value={{ daoAddress, setdao }}>
            {children}
        </DaoContext.Provider>
    );

};

export const useDao = () => {
    const context = useContext(DaoContext);
    if (!context) {
        throw new Error('usedao must be used within a daoProvider');
    }
    return context;
};
