import React, { createContext, useContext, useState } from 'react';

const WalletContext = createContext();

export const WalletProvider = ({ children }) => {
    const [walletAddress, setWalletAddress] = useState(null);

    const setWallet = (address) => {
        setWalletAddress(address);
    };

    console.log("Context value:", { walletAddress }); // Log the context value

    return (
        <WalletContext.Provider value={{ walletAddress, setWallet }}>
            {children}
        </WalletContext.Provider>
    );
};

export const useWallet = () => {
    const context = useContext(WalletContext);
    if (!context) {
        throw new Error('useWallet must be used within a WalletProvider');
    }
    return context;
};
