import React from 'react';
import './Home.css';
import '../components/Button.css';
import Button from '../components/Button.js'
import study1 from '../components/assets/study1.png';
import messy from '../components/assets/messy.png';
import sprint from '../components/assets/sprint.png';


function Home() {
    return (
        
        <div id = "home">
            <div class = "div-pad">
                <div id = "home-txt">
                    <h2>Study like</h2>
                    <h2>never before.</h2>
                    <p>Find your perfect study buddy with just one click</p>
                    
                    <Button className="beginButton" label="Buddy Up!"></Button>
                </div>
                <img id = "study1" src = {study1} alt = 'person studying'/>
            
            </div>
            
            <div class = "div-pad">
                <div id = "sharing">
                <div id = "home-txt-share">
                <h2>Share</h2>
                <p>Share your study plans, preferred study environments, and study 
                    preferences. Let others know what subjects you're
                    tackling and your study preferences.</p>
                </div>
                    <img id = "messy" src = {messy} alt='person dropping papers'/>
                </div>
            </div>
                
            <div class = "div-pad">
                <div id = "finding">
                <img id = "sprint" src = {sprint} alt='person sprinting'/>
                <div id = "home-txt-find">
                <h2>Search & Find</h2>
                <p>Discover fellow students seeking study  
                    buddies that share your goals and    
                    preferences. Filter your search by subject, group size, 
                    and other study factors to             
                    find your perfect match.</p>
                </div>
                    
                </div>
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