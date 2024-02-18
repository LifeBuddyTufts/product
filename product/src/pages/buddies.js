import {React, useState} from 'react';
// import Form from '../components/post/Form.js';
import Search from '../components/Search.js';
// import AddSesh from '../components/AddSesh.js';
import FilterBtn from '../components/FilterBtn.js';
import PostCard from '../components/post/PostCard';
import Calendar from 'react-calendar';
import Modal from '../components/Modal.js';
import sarah from '../components/assets/Group 17.png';
import lilian from '../components/assets/Group 17 (2).png';
import keiji from '../components/assets/Group 17 (4).png';
import kiki from '../components/assets/Group 17 (5).png';
// import ExampleGrid from '../components/post/grid';
import 'react-calendar/dist/Calendar.css';
import './Buddies.css'
import plus from '../components/assets/plus.png';
import '../components/AddSesh.css';



function Buddies() {        
    const [dateState, setDateState] = useState(new Date())
    const changeDate = (e) => {
        setDateState(e)
    }
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
        document.body.style.overflow = 'hidden';
    };

    const handleCloseModal = () => {
        setShowModal(false);
        document.body.style.overflow = 'auto';
    };
    return (
        <div>
            <div id = "pad">
            </div>
            <Search/>
            {/* <AddSesh/> */}
            <button 
                id="add"   
                type="submit" 
                onClick={handleClick}>
                <span>
                    <img id = "plus" src={plus} alt = 'plus icon'/>
                    <span id="btn-txt">Add a study sesh</span>
                </span>
            </button>
            {showModal && <Modal onClose={handleCloseModal} />}


            <div id="filter-btn-div">
                <FilterBtn label="classes"/>
                <FilterBtn label="time"/>
                <FilterBtn label="buddies"/>
            </div>
            
            {/* <Form></Form> */}
            <Calendar value={dateState}
            onChange={changeDate} id="cal"/>
            {/* <Form></Form> */}
            {/* <ExampleGrid> */}
            <div className='big-flex'>
                <div className='small-flex'>
                    <div className="post-card">
                       <PostCard 
                        title="Induction Proofs"
                        time="Wednesday 7 AM - 3 PM"
                        description="I’m ready to be stronger than strong induction proofs."
                        username="@sarahlovesbuddyup"
                        spotsLeft={2}
                        // buttonText="Join Now"
                        numberOfDogs={3} // Specify the number of dog images you want
                        applyFilter={true} // Set to true to apply filter, false otherwise
                        // onClick={handleClick}
                        label="Buddy Up!"
                        dogsWithFilter={[1,2]}
                        profile={sarah}
                        ></PostCard> 
                    </div>
                    <div >
                        <PostCard
                        title="Osmosis review"
                        time="Thursday 3:30 PM"
                        description="I’m not sure what this means, someone please help me!"
                        username="@thelilliantran"
                        spotsLeft={5}
                        // buttonText="Join Now"
                        numberOfDogs={7} // Specify the number of dog images you want
                        applyFilter={true} // Set to true to apply filter, false otherwise
                        // onClick={handleClick}
                        label="Buddy Up!"
                        dogsWithFilter={[2, 3, 4, 5 ,6, 7]}
                        profile={lilian}
                        ></PostCard>
                    </div>
                </div>
                <div className='small-flex'>
                    <div className="post-card">
                       <PostCard 
                        title="CS 11: pointer"
                        time="Friday 4 PM"
                        description="Hey guys, I'm looking for someone to review pointers with! So many levels of indirection..."
                        username="@kknummy"
                        spotsLeft={1}
                        // buttonText="Join Now"
                        numberOfDogs={1} // Specify the number of dog images you want
                        applyFilter={true} // Set to true to apply filter, false otherwise
                        // onClick={handleClick}
                        label="Buddy Up!"
                        dogsWithFilter={[0]}
                        profile={keiji}
                        ></PostCard> 
                    </div>
                    <div >
                        <PostCard
                        title="CS 15: Recursion"
                        time="Monday 8 AM - 10 PM"
                        description="Looking for someone to jeaopardy with! Reviewing sections 4 - 7"
                        username="@karen_loves_sarah"
                        spotsLeft={1}
                        // buttonText="Join Now"
                        numberOfDogs={3} // Specify the number of dog images you want
                        applyFilter={true} // Set to true to apply filter, false otherwise
                        // onClick={handleClick}
                        label="Buddy Up!"
                        dogsWithFilter={[1, 2]}
                        profile={kiki}
                        ></PostCard>
                    </div>
                </div>
                

            </div>
        </div>
    );
}

export default Buddies;


  