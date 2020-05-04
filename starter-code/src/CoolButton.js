import React from "react";

export const CoolButton = (props) => {
  return <button className={props.className}>{props.text}</button>;
};

export default CoolButton;
