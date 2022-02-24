import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from 'firebase/auth'
import { AuthContext } from '../context/authContext'
import { useState, useContext, useEffect } from 'react'
import { auth } from '../firebase/config'


export const useAuthContext = () => {
    const context = useContext(AuthContext)
    return context
}

export const useSignup = () => {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const { dispatch } = useAuthContext()

    const signup = async (email, displayName, password, confirmPassword) => {
        try {
            setError(null)
            setLoading(true)
            if (password !== confirmPassword) {
                throw new Error('confirm password is not match')
            }
            // create user
            const res = await createUserWithEmailAndPassword(auth, email, password)
            // dispatch login action
            dispatch({ type: 'LOGIN', payload: res.user })
            
            //TODO add a function to add displayName into user data
        }
        catch (err) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }
    return { loading, error, signup }
}

export const useLogin = () => {
    const [isCancelled, setIsCancelled] = useState(false)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const { dispatch } = useAuthContext()

    const login = async (email, password) => {
        try {
            setError(null)
            setLoading(true)

            // create user
            const res = await signInWithEmailAndPassword(auth, email, password)
            // dispatch login action
            dispatch({ type: 'LOGIN', payload: res.user })
            console.log(res.user.email)
            if (!isCancelled) {
                setLoading(false)
                setError(null)
            }
        }
        catch (err) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        return () => setIsCancelled(true)
      }, [])
    
    return { loading, error, login }
}

export const useLogout = () => {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const { dispatch } = useAuthContext()

    const logout = async () => {
        try {
            setError(null)
            setLoading(true)

            // create user
            const res = await signOut(auth)
            // dispatch login action
            dispatch({ type: 'LOGOUT' })
            console.log("log out")
        }
        catch (err) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }
    return { loading, error, logout }
}

