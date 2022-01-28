import './Recipe.css'
import {useParams} from 'react-router-dom';
import {useFetch} from '../../hooks/useFetch'
import React from 'react'

export default function Recipe() {
    const {id} = useParams();
    const url = "https://localhost:3000/recipes/" + id
    const {error, isPending, data: recipe} = useFetch(url);
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
            </>)}
        </div>
    )
}
