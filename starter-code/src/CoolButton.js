import React from "react";

const CoolButton = (props) => {
    return (
        <div>
            <button className={props.className}>{props.text}</button>
        </div>
    );
};


export default CoolButton; 