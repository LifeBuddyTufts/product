import React from 'react';
import './Search.css';
import magnify from '../components/assets/Search.png';

function Search() {
    return (
        <div id = "search-div">
            <img id = "magnifier" src={magnify} alt="magnifier icon"/><input id = "search-bar" type="search" placeholder='Search for your favorite class, study topic, etc.'></input>
        </div>
    );
}

export default Search;