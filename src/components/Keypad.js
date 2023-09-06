// Code Keypad Component Here
import React from "react";
import ReactDOM from 'react-dom';

function Keypad() {

    function myCallback() {
        console.log('Entering password...');
    };
    return (
        <div>
            <input onChange={myCallback} type="password" />
        </div>
    );
};

export default Keypad;