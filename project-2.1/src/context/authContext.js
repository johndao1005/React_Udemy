import { useEffect, createContext, useReducer } from 'react'
import {  onAuthStateChanged } from "firebase/auth"
import { userReducer } from '../reducer/userReducer';
import {auth} from "../firebase/config"

/// creating content to authenticate user
export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    //create reducer relate which will update user and observerStart though different actions
    const [state, dispatch] = useReducer(userReducer, {
        user: null,
        observerStart: false
    })

    // debug user
    console.log(state)
    
    // start the observer using onAuthStateChanged to check any changes in authentication state
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
