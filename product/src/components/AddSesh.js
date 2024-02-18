import React from 'react';
import './AddSesh.css';
import plus from './assets/plus.png';


function AddSesh() {
    return (
        <button id="add" type="submit" ><span><img id = "plus" src={plus} alt = 'plus icon'/><span id="btn-txt">Add a study sesh</span></span></button>
    );
}

export default AddSesh;