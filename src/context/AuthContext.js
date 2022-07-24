import { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '../config/firebase';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from 'firebase/auth';

const AuthContext = createContext();

const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(false);

    const register = (email, password) => createUserWithEmailAndPassword(auth, email, password);
    const login = (email, password) => signInWithEmailAndPassword(auth, email, password);
    const logout = () => auth.signOut();

    useEffect(() => {
        return auth.onAuthStateChanged(user => {
            setUser(user);
            setLoading(false);
        })
    }, []);

    const value = {
        user, register, login, logout
    }

    return (
        <AuthContext.Provider value={ value }>
            { !loading && children }
        </AuthContext.Provider>
    )
}

export {
    useAuth, AuthProvider
}