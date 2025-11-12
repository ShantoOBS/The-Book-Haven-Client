import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { useState } from 'react'
import { createContext } from "react";
import { auth } from '../Firebase/firebase.config';

export const AuthContext = createContext();

const googleProvider = new GoogleAuthProvider();

export default function AuthProvider({ children }) {

    const [user, setUser] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    const signInGoogle=()=>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider);
    }

    const handleLogout=()=>{
         return signOut(auth)
    }

    const createUser=(email,password)=>{
         setLoading(true);
         return createUserWithEmailAndPassword(auth,email,password);
    }

   const updatePro = (user, profile) => {
    return updateProfile(user, profile); 
   };

    

    const authInfo = {
        user,
        setUser,
        error,
        setError,
        loading,
        setLoading,
        signInGoogle,
        createUser,
        handleLogout,
         updatePro,


    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}
