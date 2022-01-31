import { useState } from "react";
import { projectAuth } from "../firebase/congif";


export const useSignup = ()=>{
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);

    const signup = async (email, password,displayName)=>{
        setError(null);// needed to reset the error after each time pressing the buittons
        setIsPending(true);
        try {

            const res = await projectAuth.createUserWithEmailAndPassword(email, password)
            console.log(res.user);
            if (!res){
                throw new Error("Could not complete the sign up");
            }

            // add user name to user
            await res.user.updateProfile({displayName} )
            setIsPending(false);
            setError(null);
        } catch (e) {
            console.error(e.message);
            setError(e.message);
            setIsPending(false);
        }
    }

    return {error,isPending,signup};
}