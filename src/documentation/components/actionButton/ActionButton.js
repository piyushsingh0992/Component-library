import React from 'react';
import "./actionbutton.css";
import add from "./images/add.svg";
import edit  from "./images/edit.svg";
import navigate from "./images/navigate.svg";

const Floatingbutton = ({type,clickFunction,position}) => {

    function clickHandler(){
        clickFunction && clickFunction();
    }

    function typehandler(types){
        switch(types){
            case 'add':
                return add;
            case 'edit':
                return edit;
            case 'navigate':
                return navigate;

            default:
                return edit;
        }
    }

    function positionHandler(position){
        switch(position){
            case'top-left':
            return 'action-top action-left';

            case 'top-right':
                return 'action-top action-right';

            case 'bottom-left':
                return 'action-bottom action-left';

            case 'bottom-right':
                return 'action-bottom action-right';
            case 'preview':
                return 'no-position';
            default :
            return 'action-bottom action-right'

        }

    }

    return (
        <div className={`floating-button ${positionHandler(position)}`} onClick={clickHandler}>
            <img src={typehandler(type)} className="floating-icon"/>
        </div>
    );
};

export default Floatingbutton;