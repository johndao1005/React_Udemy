import './RecipeList.css';
import React from 'react';
import { Link } from 'react-router-dom';
import trashcan from '../asset/delete_black_24dp.svg'
import { projectFirestore } from '../firebase/congif';
export default function RecipeList  ({recipes}) {

if(recipes.length ===0){
    return <div className="error">No recipes found</div>;
}
const handleClick = async (id)=>{
    projectFirestore.collection('recipes').doc(id).delete();
}
    return (
        <div className="recipe-list">
            {recipes.map(recipe=>(
                <div key={recipe.id} className="card">
                    <h3>{recipe.title}</h3>
                    <p>{recipe.cookingTime} to make</p>
                    <div>{recipe.method?recipe.method.substring(0,100):"error"}</div>
                    
                    <Link to={`/recipes/${recipe.id}`}>Cook this</Link>
                    <img
                    alt=''
                    className="delete"
                    src={trashcan}
                    onClick={()=>handleClick(recipe.id)}
                    />
                </div>
            ))}
        </div>
    )
}
