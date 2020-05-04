import React from "react";

const CoolButton = (prop) => {
  console.log(prop);
  return (
      <button class={`button ${prop.className} ${prop.isSmall && 'is-small'} ${prop.isDanger && 'is-danger'}`}>
        {prop.children}
      </button>
  );
};

export default CoolButton;
