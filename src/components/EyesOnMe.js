// Code EyesOnMe Component Here
import React from "react";
import ReactDOM from 'react-dom';

function EyesOnMe () {
    return (
        <button text='Button' onFocus={() => console.log('Good!')} 
        onBlur={() => console.log('Hey! Eyes on me!')}>I'm a Button</button>
    );
};

export default EyesOnMe;