import React from "react";

const CoolButton = (props) => {
  return (
    <>
      <button className={props.class}>{props.button1}</button>
    </>
  );
};

export default CoolButton;
