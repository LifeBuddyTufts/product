import { useState } from 'react';
import './Form.css';
// import Button from '../Button.js'



function Form() {

    const [title, setTitle] = useState('')
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(title + ' | ' + name + ' | ' + description)

        if (!description) {
            setError(<p className="required">Message is empty. Please type a message.</p>)
        } else {
            setError('')
        }
    }

    return (
        <>
            
 
            <form>
                <h1 id = "form-title">Add a study sesh</h1>
                <label><input placeholder="Add class assignment or study session name here!"type="text" name="title" value={title} onChange={ (e) => setTitle(e.target.value)} /></label>
                <label><input placeholder="Time" type="text" name="name" value={name} onChange={ (e) => setName(e.target.value)}/></label>
                <label><input placeholder='Description' type="text" name="description" value={description} onChange={ (e) => setDescription(e.target.value)}/></label> 
                <label><input placeholder='Number of Buddies' type="text" name="description" value={description} onChange={ (e) => setDescription(e.target.value)}/></label> 

                {error}

                <button type="submit" onClick={handleSubmit}>Submit</button>
                {/* <Button id = "form-btn"></Button> */}
            </form>
        
        </>

    )
};

export default Form;