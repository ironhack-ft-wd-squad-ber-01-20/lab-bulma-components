import React, { Fragment } from "react";
import Navbar from "./Navbar";
import CoolButton from "./CoolButton";
import FormField from "./formfield/FormField";

const Signup = () => {
  return (
    <Fragment>
      <Navbar />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField
        label="Email"
        type="email"
        placeholder="e.g. alexsmith@gmail.com"
      />
      <CoolButton className="button is-success" text="Submit" />
    </Fragment>
  );
};

export default Signup;
