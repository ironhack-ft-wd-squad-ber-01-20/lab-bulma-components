import React, { Fragment } from "react";

const CoolButton = (props) => {
    console.log(props)
    return (
        <Fragment>
            <button className={`button ${props.className}`}>
                {props.buttonLabel}
            </button>
        </Fragment> 
    )
}

export default CoolButton;