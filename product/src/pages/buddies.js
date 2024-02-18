import {React, useState} from 'react';
// import Form from '../components/post/Form.js';
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
            {/* <Form></Form> */}
            <Calendar value={dateState}
            onChange={changeDate} id="cal"/>
            {/* <Form></Form> */}
            <PostCard></PostCard>
        </div>
    );
}

export default Buddies;