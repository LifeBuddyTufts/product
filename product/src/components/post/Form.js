import { useState } from 'react';
import postData from './postData';
// import axios from "axios";
import './Form.css';
// import Button from '../Button.js'



function Form() {

    const [title, setTitle] = useState('')
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [error, setError] = useState('')
    const [buddies, setBuddies] = useState(0)
    const myPostData = { ...postData };

    // const axiosPostData = async() => {
    //     await axios.post('http://localhost:4000/users')
    // }
    
    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(title + ' | ' + name + ' | ' + description)
        
        myPostData._id = 
        myPostData.title = title;
        myPostData.name = name;
        myPostData.description = description;
        myPostData.buddies = buddies;

        console.log(myPostData.title + ' | ' + myPostData.name + ' | ' + myPostData.description + ' | ' + myPostData.buddies);

        if (!description) {
            setError(<p className="required">Message is empty. Please type a message.</p>)
        } else {
            setError('')
        }

        setTitle('');
        setName('');
        setDescription('');
        setBuddies(0);
    }

    return (
        <>
            
 
            <form id= "myForm">
                <label>Title: 
                    <input 
                        type="text" 
                        name="title" 
                        value={title} 
                        onChange={ 
                            (e) => setTitle(e.target.value)} />
                </label>
                <label>Name: <input type="text" name="name" value={name} onChange={ (e) => setName(e.target.value)}/></label>
                <label>Description: <input type="text" name="description" value={description} onChange={ (e) => setDescription(e.target.value)}/></label> 
                <label>Number of Buddies: <input type="number" name="buddies" value={buddies} onChange={ (e) => setBuddies(e.target.value)}/></label>

                {error}

                <button type="submit" onClick={handleSubmit}>Post</button>
            </form>
        
        </>

    )
};

export default Form;