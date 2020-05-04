import React from "react";

const CoolButton = props => {
    return (
      <div>
        <button className={props.className}>{props.title}</button>
      </div>
    );
  };
  export default CoolButton;