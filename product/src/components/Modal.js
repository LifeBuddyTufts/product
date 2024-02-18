import React from 'react';
import './Modal.css';
import Form from './post/Form';

function Modal({ onClose }) {
    return (
        <div className="modal-overlay">
             {/* <div className="modal">
                <span className="close" onClick={onClose}>&times;</span>
                <div className="modal-content">
                    <h2>Modal Title</h2>
                    <p>This is the content of the modal.</p>
                </div>
            </div>  */}
            <Form></Form>
        </div>
    );
}

export default Modal;