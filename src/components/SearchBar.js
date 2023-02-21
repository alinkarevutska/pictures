import './SearchBar.css';
import React from "react";
import {useState} from 'react';

//handling text input
function SearchBar({ onSubmit }) {
    //1) create a new piece of state
    const [term, setTerm] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(term);
    }
    //2) create an event handler to watch for the 'change' event
    const handleChange = (event) => {
        //3) when the 'onChange' event fires, get the value from the input
        //4) take that value and use it to update your state
        setTerm(event.target.value);
    }

    return (
        <div className="search-bar">
            <form onSubmit={handleFormSubmit}>
                <label>Enter search term!</label>
            {/* 5) pass your state to the input as the value prop */}
                <input autoFocus value={term} onChange={handleChange}/>
            </form>
        </div>
    )
}

export default SearchBar;