import React, { Fragment } from "react";
import Navbar from "./Navbar";
import Formfield from "./Formfield";
import CoolButton from "./CoolButton";

const Signup = () => {
  return (
    <Fragment>
      <Navbar />
      <Formfield label="Name" type="text" placeholder="e.g Alex Smith" />
      <Formfield
        label="Email"
        type="email"
        placeholder="e.g. alexsmith@gmail.com"
      />
      <Formfield
        label="Password"
        type="password"
        placeholder="At least 6 characters"
      />
      <CoolButton isSmall isDanger className="is-rounded my-class">
        Button 1
      </CoolButton>
      <CoolButton isSmall isSuccess>
        Button 2
      </CoolButton>
    </Fragment>
  );
};

export default Signup;
