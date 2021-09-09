import React from "react";
import "./component.css";
import Iframe from "../iframe/Iframe.js";
import CodeSandBox from "../codeSandbox/CodeSandBox.js";
const Component = ({ id, name, desc, preview, iframe,children, sandBox, code }) => {

  return (
    <div className="component" id={id}>
      <div className="component-heading">
        <h1>{name}</h1>
        {sandBox && (
          <CodeSandBox link={sandBox} />
        )}
      </div>

      <p>{desc}</p>

      {iframe && <Iframe link={iframe} />}
      {preview && <div className="component-preview">{preview.map(item=>item)}</div>}
      <div className="code">
        <iframe
          src={code.src}
          style={{
            width: `${code.width}px`,
            height: `${code.height}px`,
            border: 0,
            transform: "scale(1)",
            overflow: "hidden",
          }}
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      </div>
    </div>
  );
};

export default Component;
