import './Home.css'
import {useFetch} from '../../hooks/useFetch'
import React from 'react'
import RecipeList from '../../components/RecipeList'
//components



export default function Home() {
    const {data,isPending,error} = useFetch("http://localhost:3000/recipes")
    return (
        <div className="home">
            This is fine
            {error && <p className="error">{error.message}</p>}
            {isPending && <p className="loading"> Loading...</p>}
            {data && <RecipeList recipes={data}/>}
        </div>
    )
}
