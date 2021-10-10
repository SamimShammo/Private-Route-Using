import React, { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuthentication from '../New-firebase/Firebase.init';

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth()
    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user);
                setUser(result.user);
            })
            .catch(error => {
                setError(error.message);
            })
    }
    console.log(user)

    useEffect(() => {
        onAuthStateChanged(auth, user =>{
            if(user){
                setUser(user);
            }
        })
    }, [])

    const logOut = () => {
        signOut(auth) 
        .then(() => {
            setUser({})
        })
        .catch(error => {
            setError(error.message)
        })
    }


    return { logOut, user, error, signInUsingGoogle}
     
};

export default useFirebase;