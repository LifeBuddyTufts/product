import {React, useState} from 'react';
// import Form from '../components/post/Form.js';
import Search from '../components/Search.js';
import AddSesh from '../components/AddSesh.js';
import FilterBtn from '../components/FilterBtn.js';
import PostCard from '../components/post/PostCard';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Buddies.css'


function Buddies() {        
    const [dateState, setDateState] = useState(new Date())
    const changeDate = (e) => {
        setDateState(e)
    }
    return (
        <div>
            <div id = "pad">
            </div>
            <Search/>
            <AddSesh/>
            <div id="filter-btn-div">
                <FilterBtn label="classes"/>
                <FilterBtn label="time"/>
                <FilterBtn label="buddies"/>
            </div>
            
            {/* <Form></Form> */}
            <Calendar value={dateState}
            onChange={changeDate} id="cal"/>
            <PostCard></PostCard>
        </div>
    );
}

export default Buddies;