import { useEffect, useState } from "react";
import { projectAuth } from "../firebase/congif";
import {useAuthContext} from "./useAuthContext";


export const useSignup = ()=>{
    const [isCancelled, setIsCancelled] = useState(false);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const {dispatch} = useAuthContext();

    const signup = async (email, password,displayName)=>{
        setError(null);// needed to reset the error after each time pressing the buttons
        setIsPending(true);
        try {
            const res = await projectAuth.createUserWithEmailAndPassword(email, password)
            if (!res){
                throw new Error("Could not complete the sign up");
            }
            // add user name to user
            await res.user.updateProfile({displayName})
            dispatch({type:"LOGIN",payload:res.user})
            if(!isCancelled) {
                setIsPending(false);
                setError(null);
            }
            
        } catch (e) {
            console.error(e.message);
            setError(e.message);
            setIsPending(false);
        }
    }
    useEffect(()=>{
        return ()=>{
            setIsCancelled(true);
        }
    },[]);
    return {error,isPending,signup};
}