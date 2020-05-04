import React from "react";

export const CoolButton = (props) => {
  return (
    <div>
      <button className={props.className}>{props.text}</button>
    </div>
  );
};
