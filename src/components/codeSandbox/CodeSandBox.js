import React from 'react';

import  "./codeSandbox.css";

import codeSandBoxIcon from "./images/codeSandbox.svg";
const CodeSandBox= ({link}) => {
    return (
        <a className="codeSandbox" href={link} target="_blank">
            <div className="codesandbox-bubble"><span>Try on CodeSandBox </span></div>
            <img src={codeSandBoxIcon}/>
            <p>CodeSandbox</p>
        </a>
    );
};

export default CodeSandBox
;

