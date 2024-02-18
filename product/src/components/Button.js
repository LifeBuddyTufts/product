import React from 'react';
import './Button.css';

// const Button = document.createElement('myButton')
// Button.innerText = "Get Started"

class Button extends React.Component {
    render() {
        return (
            <button className={this.props.className} id='beginButton' onClick={this.props.onClick}>
                {this.props.label}
            </button>
        );
    }
}

export default Button;