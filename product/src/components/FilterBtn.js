import React from 'react';
import './FilterBtn.css';
import drop from '../components/assets/drop.png';

function FilterBtn(props) {
    const {label} = props;
    return (
        <button id="filter">{label}<img id="drop" src={drop} alt = "dropdown icon"/></button>
    );
}

export default FilterBtn;