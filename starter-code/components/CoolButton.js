import React, { Component } from "react";

const CoolButton = props => {
    return <a className={props.className}>{props.children}</a>;
};

export default CoolButton;
