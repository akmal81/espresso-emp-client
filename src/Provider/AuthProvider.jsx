import { 
    createUserWithEmailAndPassword, 
    onAuthStateChanged, 
    signInWithEmailAndPassword,
    signOut,
} from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.init';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const singInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signOutUser = () =>{
        return signOut(auth)
    }

    // onAuthStateChanged(auth, currentUser =>{
    //     if(currentUser){
    //         console.log('logged user',currentUser);
    //         setUser(currentUser)
    //     }
    //     else{
    //         console.log('no user logged in');
    //         setUser(null)
    //     }
    // })
    useEffect(()=>{
       const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            console.log('current User', currentUser);
            setUser(currentUser)
        })
        return ()=>{
            unSubscribe();
        }
    },[])

    const authInfo = {
        user,
        setUser,
        loading,
        createUser,
        singInUser,
        signOutUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;