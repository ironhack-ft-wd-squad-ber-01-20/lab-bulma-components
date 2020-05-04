import React, { Component, Fragment } from "react";


const Buttons = () => {
  return (
    <Fragment>
      <CoolButton classes="isSmall" className="is-rounded my-class" name="Button 1"/>
      <CoolButton classes="isSmall" name="Button 2"/>
    </Fragment>
  );
};

const CoolButton = (props) => {
    console.log(props)
  return <button className={props.className}>{props.name}</button>;
};

export default Buttons;
