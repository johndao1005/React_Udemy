import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import './Searchbar.css';
export default function SearchBar() {

    const [term, setTerm] = useState('')
    const navigate = useNavigate();

    const handleSubmit= (e) => {
        e.preventDefault();
        navigate(`/search?q=${term}`,{replace: true});
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor='search'>
                    Search:
                </label>
                <input 
                onChange={(e)=>setTerm(e.target.value)}
                type='text'
                id='search'
                ></input>
            </form>
        </div>
    )
}
