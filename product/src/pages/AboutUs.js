import { React } from 'react';
import './AboutUs.css';
import puparms from '../components/assets/puparms.png';
import group from '../components/assets/group.png';

function AboutUs() {
    return (
        <div id = "about-div">
            <div id = "pad">
            </div>
            <div id="content">
            <h1 id = "about-title">Meet the Team</h1>
            <img id = "puparms" src={puparms} alt='puppy icon'/>

            <img id ="group-photo"src = {group} alt='da teaammm'/>
            </div>
        </div>
    );
}

export default AboutUs;