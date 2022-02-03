import { useEffect, useState } from "react";
import { projectAuth } from "../firebase/congif";
import {useAuthContext} from "./useAuthContext";


export const useLogin = ()=>{
    const [isCancelled, setIsCancelled] = useState(false);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const {dispatch} = useAuthContext();

    const login = async (email, password,displayName)=>{
        setError(null);// needed to reset the error after each time pressing the buttons
        setIsPending(true);
        try {

            const res = await projectAuth.signInWithEmailAndPassword(email, password)
            

            if (!res){
                throw new Error("Could not complete the login");
            }

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
    return {error,isPending,login};
}