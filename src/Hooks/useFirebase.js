import initializeAuthentication from "../pages/Login/Firebase/firebase.init"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut} from "firebase/auth";
import { useEffect, useState } from "react";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            setUser(result.user)
        })
    }

    const logOut = () => {
        signOut(auth)
        .then(()=> {
            setUser({});
        })
    }
    
    useEffect(()=>{
        onAuthStateChanged(auth, user => {
            if(user){
                setUser(user);
            }
        })
    }, [])
    return {
        user, 
        signInUsingGoogle,
        logOut
    }
}

export default useFirebase;