// import postData from './postData';
// import Axios from "axios";
import './PostCard.css';
import React from 'react';
import '../Nav.css';
import dog from '../assets/dog.png';
import Button from '../Button';



function PostCard(props) {

    const { title, time, description, username, spotsLeft, numberOfDogs, applyFilter, label, dogsWithFilter, profile} = props;

    // Create an array to store the JSX elements of dog images
    const dogImages = [];
    for (let i = 0; i < numberOfDogs; i++) {
        const imgClassName = applyFilter && dogsWithFilter.includes(i) ? 'hide-dog' : '';
        dogImages.push(<img key={i} src={dog} className={imgClassName} alt='error'></img>);
    }
    return (
        <div className="card">            
                <div className="title">{title}</div>
                <div className='time'>{time}</div>
                <div className='middle-section'>
                    <div className='left-section'>
                        <div className='description'>{description}</div>
                        <div className='username'>{username}</div> 
                    </div>
                    <div>
                        <img src={profile} alt='error'></img>
                    </div>
                </div>
                <div>
                    <span className='number-spots-left'>{spotsLeft}</span>
                    <span className='number-spots-text'>buddies spots left</span>
                </div>
                <div className='dogs-container'>
                    {dogImages}
                </div>
                <div className='button-buddyUp'>
                    <Button className="postButton" label={label} />
                    {/* <Button buttonText={buttonText} onClick={onClick} label={label} /> */}
                </div>
            </div>  
    )
};

export default PostCard;


    //   <div className={classes._90E718C0569C42DC9B219CF50A32F7}></div>
    //   <div className={classes.inductionProofs}>Induction proofs</div>
    //   <div className={classes._7AM3PM}>7 AM - 3 PM</div>
    //   <div className={classes.iMReadyToBeStrongerThanStrongI}>
    //     I’m ready to be stronger than strong induction proofs.{' '}
    //   </div>
    //   <div className={classes.Sarahlovesbuddyup}>@sarahlovesbuddyup</div>
    //   <div className={classes._3BuddiesSpots}>
    //     <p className={classes.labelWrapper}>
    //       <span className={classes.label}>3</span>
    //       <span className={classes.label2}> </span>
    //       <span className={classes.label3}>buddies spots</span>
    //     </p>
    //   </div>
    //   <div className={classes.dog_23968331}></div>
    //   <div className={classes.dog_239683312}></div>
    //   <div className={classes.dog_239683313}></div>
    //   <div className={classes.rectangle21}></div>
    //   <div className={classes.buddyUp}>Buddy up!</div>
    //   <div className={classes._2BuddySpotsLeft}>2 buddy spots left</div>
    // </div>