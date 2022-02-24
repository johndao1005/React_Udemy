import { useEffect, createContext, useReducer } from 'react'
import {  onAuthStateChanged } from "firebase/auth"
import { userReducer } from '../reducer/userReducer';
import {auth} from "../firebase/config"
///start an authentication action


/// creating content to authenticate user
export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(userReducer, {
        user: null,
        observerStart: false
    })
    
    useEffect(() => {
        const unsub = onAuthStateChanged(auth, user => {
            dispatch({ type: "OBSERVER_START", payload: user })
            unsub()
        })
    }, [])

    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}
