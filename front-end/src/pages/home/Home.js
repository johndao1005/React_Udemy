import './Home.css'
import React, { useEffect, useState } from 'react'
import RecipeList from '../../components/RecipeList'

import { projectFirestore } from '../../firebase/congif';



export default function Home() {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)

    useEffect(()=>{
        setIsPending(true);
        const unsub = projectFirestore.collection('recipes').onSnapshot((snapshot)=>{//onSnapshot will update the data when any changes happen 
            if(snapshot.empty) {
                setError('No recipes found');
                setIsPending(false);
            } else{
                let result = [];
                snapshot.docs.forEach(recipe => {
                    result.push({id:recipe.id , ...recipe.data()})
                }) 
                setData(result);
                setIsPending(false);
            }
        },(e)=>{ // happen when there is error with the function and print the error
            setError(e.message);
            setIsPending(false);
        })
        return () => unsub();
    },[])
    return (
        <div className="home">
            {error && <p className="error">{error.message}</p>}
            {isPending && <p className="loading"> Loading...</p>}
            {data && <RecipeList recipes={data}/>}
        </div>
    )
}
