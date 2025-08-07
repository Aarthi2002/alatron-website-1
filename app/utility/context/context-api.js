"use client";
import React, { useState, createContext, useEffect } from "react";
export const AppContext = createContext();

export const AuthProvider = ({ children }) => {
    const [hirestatus, setHirestatus] = useState(false)
    const value = {
        hirestatus, setHirestatus
    };

    useEffect(() => {
        setTimeout(() => {
            setHirestatus(true)
        }, 3000);

    }, [])


    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

export default AuthProvider;