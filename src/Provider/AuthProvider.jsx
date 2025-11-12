import React, { useState } from 'react'
import { createContext } from "react";

export const AuthContext = createContext();



export default function AuthProvider({ children }) {

    const [user, setUser] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    const authInfo = {
        user,
        setUser,
        error,
        setError,
        loading,
        setLoading,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}
