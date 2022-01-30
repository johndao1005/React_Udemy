import './Create.css'
import {useNavigate} from 'react-router-dom'
import React, { useRef, useState } from 'react'
import { useFetch } from '../../hooks/useFetch';
import { projectFirestore } from '../../firebase/congif';

export default function Create() {
    const [title, setTitle] = useState('');
    const [method, setMethod] = useState('');
    const [cookingTime, setCookingTime] = useState('');
    const [newIngredient, setNewIngredient] = useState('');
    const [ingredients, setIngredients] = useState([]);
    const ingredientInput = useRef(null);
    const navigate = useNavigate();

const {postData, data, error} = useFetch("http://localhost:3000/recipes","POST")

    const handleSubmit = async (e)=>{
        e.preventDefault();
        const doc = {title, ingredients, method, cookingTime: cookingTime + ' minutes'};
        try{
            await  projectFirestore.collection('recipes').add(doc);
            navigate('/')
        } catch(e){
            console.log(e)
        }
    }
    const handleAdd = (e)=>{
        e.preventDefault();
        const ing = newIngredient.trim();
        if(ing && !ingredients.includes(ing)){
            setIngredients(prevIngredients => [...prevIngredients,ing])
        }
        console.log(ingredients)
        setNewIngredient('');//update new ingredient field
        ingredientInput.current.focus();// let user to continue typing the ingredient
    }
    return (
        <div className="create">
            <h2 className="page-title">Create</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Recipe title:
                    </span>
                    <input type="text" onChange={e => setTitle(e.target.value)} value={title} required />
                </label>

                <label>
                    <span>Recipe ingredients</span>
                
                    <input type="text" onChange={e => setNewIngredient(e.target.value)} ref={ingredientInput} value={newIngredient} />
                    <button onClick={handleAdd} className="btn">add</button>
                </label>
                <p>Current ingredients: {ingredients.map(i=> <em key={i}>{i}, </em>)}</p>


                <label>
                    <span>Recipe method:
                    </span>
                    <textarea onChange={e => setMethod(e.target.value)} value={method} required />
                </label>

            
                <label>
                    <span>Cooking time:
                    </span>
                    <input type="number" onChange={e => setCookingTime(e.target.value)} value={cookingTime} required />
                    </label>
                <button className="btn">submit</button>
            </form>

        </div>
    )
}
