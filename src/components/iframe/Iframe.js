import React,{useState} from 'react';
import "./iframe.css";
import Desktop from "./images/desktop.svg";
import Phone from "./images/phone.svg";

const Iframe = ({link}) => {

    const [view,viewSetter]=useState(true);

    return (
        <div className="iframe">
            <div className="responsive-btns">
                    <div>
                        <span className="desktop-icon">
                            <div className="desktop-bubble"><span>Desktop View</span></div>
                            <img src={Desktop}  onClick={()=>{viewSetter(true); }}/>
                        </span>
                        <span className="mobile-icon">
                            <div className="mobile-bubble"><span>Phone View</span></div>
                            <img src={Phone}   onClick={()=>{viewSetter(false); }}/>
                        </span>
                        
                        
                        
                        
                    </div>
            </div>
            <iframe  src={link}
          height="480px"
        className={view?'desktop':'mobile'}></iframe>
            
        </div>
    );
};

export default Iframe;