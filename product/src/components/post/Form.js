import { useState } from 'react';

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
            <h1>Add a study sesh</h1>
 
            <form>
                <label>Title: <input type="text" name="title" value={title} onChange={ (e) => setTitle(e.target.value)} /></label>
                <label>Name: <input type="text" name="name" value={name} onChange={ (e) => setName(e.target.value)}/></label>
                <label>Description: <input type="text" name="description" value={description} onChange={ (e) => setDescription(e.target.value)}/></label> 

                {error}

                <button type="submit" onClick={handleSubmit}>Submit</button>
            </form>
        
        </>

    )
};

export default Form;