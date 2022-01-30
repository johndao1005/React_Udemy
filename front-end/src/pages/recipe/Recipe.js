import './Recipe.css'
import {useParams} from 'react-router-dom';
import React, {useState,useEffect} from 'react'
import { projectFirestore } from '../../firebase/congif';

export default function Recipe() {
    
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)
    const {id} = useParams();
    const [recipe, setRecipe] = useState(null)
    
    useEffect(()=>{
        setIsPending(true);
        const unsub = projectFirestore.collection('recipes').doc(id).onSnapshot(doc =>{
        if(doc.exists){
            setIsPending(false)
            setRecipe(doc.data());
        }else{
            setIsPending(false);
            setError('Could not find recipe');
        }},(e)=>{
            setError('update failed');
            setIsPending(false);
        })
        return ()=>unsub();
    },[id])
    const handleClick =()=>{
        projectFirestore.collection('recipes').doc(id).update({
            title: 'something cool x3'
        })
        
    }

    return (
        <div className="recipe">
            {error && <h1>{error.message}</h1>}
            {isPending && <p className="loading"> Loading...</p>}
            {recipe && (<>
                <h2>{recipe.title}</h2>
                <p>Take {recipe.cookingTime} to cook</p>
                <ul>
                    {recipe.ingredients.map(ing => <li key={ing}>{ing}</li>)}
                </ul>
                <p className="method">{recipe.method}</p>
                <button className="btn" onClick={handleClick}>Update details</button>
            </>)}
        </div>
    )
}
