import React, { Fragment } from "react";

const CoolButton = (props) => {
    console.log(props)
    return (
        <Fragment>
            <button className="button is-rounded my-class is-danger is-small">{props.danger}</button>
            <button className="button is-small is-success">{props.success}</button>
        </Fragment> 
    )
}

export default CoolButton;