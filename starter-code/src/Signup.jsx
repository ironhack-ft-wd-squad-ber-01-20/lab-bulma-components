import React from "react";
import CoolButton from "./CoolButton";
import FormField from "./FormField";
import Navbar from "./Navbar";

const Signup = () => {
  return (
    <div>
      <Navbar />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField
        label="Email"
        type="email"
        placeholder="e.g. alexsmith@gmail.com"
      />
      <FormField label="Password" type="password" placeholder="password" />
      <CoolButton
        class="button is-rounded my-class is-danger is-small"
        children="Submit"
      />
    </div>
  );
};
export default Signup;
