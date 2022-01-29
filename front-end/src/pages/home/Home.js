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
        projectFirestore.collection('recipes').get().then((snapshot)=>{
            if(snapshot.empty) {
                setError('No recipes found');
                
            } else{
                let result = [];
                snapshot.docs.forEach(recipe => {
                    result.push({id:recipe.id , ...recipe.data()})
                })
                setData(result);
                
            }
        }).catch(e=>{
            setError(e.message)
        }).finally(() => {
            setIsPending(false);
        })
    },[])
    return (
        <div className="home">
            {error && <p className="error">{error.message}</p>}
            {isPending && <p className="loading"> Loading...</p>}
            {data && <RecipeList recipes={data}/>}
        </div>
    )
}
