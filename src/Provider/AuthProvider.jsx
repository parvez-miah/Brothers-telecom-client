
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateCurrentUser, updateProfile } from "firebase/auth";
import { useState } from "react";
import { createContext } from "react";
import { app } from "../Firebase/firebase.config";
import { useEffect } from "react";

const auth = getAuth(app);

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');



    // Create User


    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    };


    const updateUserProfile = ({ name, photo }) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photo
        });
    }

    // login User


    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
            .catch((error) => {
                setError(error.code)
                setError(error.message)
            })
    };


    // logOut

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }


    // state managements
    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);

            setLoading(false);
        })

        return () => {
            return unsubscribe;
        }
    }, []);





    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        error,
        updateUserProfile

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider