

import React from "react"; 

const CoolButton = (props) => {
    return (
 
   
      <div className="buttons">


        <a className={props.buttonClass}>
         {props.buttonText}
        </a> 

  
    </div> 


);
}

export default CoolButton;