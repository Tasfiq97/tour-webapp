import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/Firebase.init";

initializeAuthentication();
const useFirebase=()=>{
    const [user,setUser]=useState({})
    const auth = getAuth();
    const signUpWithGoogle=()=>{
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        .then((result) => {
        
        setUser(result.user)
        })
    }

    useEffect(()=>{
       const unsubscribed= onAuthStateChanged(auth, (user) => {
            if (user) {
              
                setUser(user)
             
            } else {
              setUser({})
            }
          });
           return ()=> unsubscribed;
    },[])

    const logOut=()=>{
        signOut(auth)
        .then(()=>{})
    }
    return {
        user,
        signUpWithGoogle,
        logOut

    }
}

export default useFirebase;