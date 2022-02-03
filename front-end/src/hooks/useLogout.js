import { useEffect, useState } from "react";
import { projectAuth } from "../firebase/congif";
import {useAuthContext} from "./useAuthContext";


export const useLogout = ()=>{
    const [isCancelled, setIsCancelled] = useState(false);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const {dispatch} = useAuthContext();

    const logout = async()=>{
        setError(null);
        setIsPending(true);
        
        //sign user out of
        try{
            await projectAuth.signOut();
            //dispatch logout action
            dispatch({type:"LOGOUT"});

            //update state
            if(!isCancelled) {
                setIsPending(false);
                setError(null);
            }

        } catch (e){
            console.log(e.message);
            setError(e.message);
            setIsPending(false);
        }
    }

    //cleanup function run every time a page is start
    useEffect(()=>{
        return ()=>{
            setIsCancelled(true);
        }
    },[]);
    return {logout, error,isPending};
}