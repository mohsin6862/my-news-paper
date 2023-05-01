
import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';


const auth = getAuth(app);
export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    const [user ,setUser] =useState(null);

    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signIn = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const Logout =()=>{
        return signOut(auth)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,LoggedUser=>{

            setUser(LoggedUser)

        })

        return()=>{

            unsubscribe();

        }
    },[])

    const userInfo = {
        user,
        createUser,
        signIn,
        Logout,

    }
    


    return (
        <AuthContext.Provider value={userInfo}>

            {children}
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;