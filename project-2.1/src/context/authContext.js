import { useEffect, createContext, useReducer } from 'react'
import { getAuth } from "firebase/compat/auth"

///start an authentication action
const auth = getAuth();

/// creating content to authenticate user
export const authContext = createContext();


export const authReducer = (state, action) => {
    /// create a reducer to sum up the authentication actions
    switch (action.type) {
        case "LOGIN":
            return { ...state, user: action.payload }
        case "LOGOUT":
            return { ...state, user: null }
        case "SIGNUP":
            return { ...state, user: action.payload}
        default:
            return { ...state };
    }
}
