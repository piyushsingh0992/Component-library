import React from 'react';
import cancel from "./images/cancel.svg";
import "./chip.css";
import cancelSuccess from "./images/successCancel.svg";
import cancelWarning from "./images/warningCancel.svg";
import cancelPrimary from "./images/primaryCancel.svg";
import cancelSecondary from "./images/secondaryCancel.svg";
const Chip = ({text,clickFunction,type}) => {
    const clickHandler=()=>{
        clickFunction && clickFunction();
    }

    function cancelButton(type){
        switch(type?.toLowerCase()){
            case 'primary':
                return cancelPrimary;

            case 'secondary':
                return cancelSecondary;
            case 'warning':
                return cancelWarning;
            case 'success':
                return cancelSuccess

            default:
                return cancelPrimary

        }

    }
    return (
        
        <div className={`chip chip-${type?type:
        
        'primary'}`}>
            {text}
            <img onClick={clickHandler} src={cancelButton(type)}   className="chip-cancel"/>
        </div>
        
    );
};

export default Chip;