import React from 'react';
import "./toggleButton.css";

const ToggleButton = () => {
    return (
        <label className="switch">
        <input type="checkbox" onChange={(e)=>{console.log(e.target.checked)}}/>
        <span className="toggleButton round"/>
        </label>
    );
};

export default ToggleButton;