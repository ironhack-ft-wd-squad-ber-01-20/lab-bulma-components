import React, { Component, Fragment } from "react";
import Navbar from "./Navbar"
import FormField from "./FormField";
import CoolButton from "./CoolButton";

const Signup = (props) => {
    return (
        <Fragment>
            <Navbar />
            <FormField />
            <CoolButton className="cool is-primary is-info" buttonLabel="Submit"/>
        </Fragment>
    )

}

export default Signup