import React from 'react';
import './Home.css';
// import Nav from '../components/Nav.js';
import study1 from '../components/assets/study1.png';


function Home() {
    return (
        <div id = "home">
            {/* <Nav></Nav> */}
            <div id = "home-txt">
            <h2>Connect like</h2>
            <h2>never before</h2>

            <p>Find your perfect study buddy with just one click</p>
            
            </div>
                <img src = {study1} alt = 'person studying'/>
            <div>
                
            </div>
        </div>
    );
}

export default Home;


/* Post Necessities {
    "Title" : "Discrete Exam 1"
    "User" : "@sarah_jun"
    "Date" : "Tuesday"
    "Time" : "9:30"
    "Description" : "Looking for people..."
    "Partners" : 3
    "Max Partners" : 5
}   


*/