import React from "react";

const CoolButton = (props) => {
  return (
    <>
      <button className={props.class}>{props.children}</button>
    </>
  );
};

export default CoolButton;
