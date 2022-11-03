import React from 'react';
import '../../App.css';
import './Button.css';


const Button = (props) => {    
    return (
        <button className={props.className} type={props.buttonType}> {props.buttonName} </button>
    );

};

export default Button;