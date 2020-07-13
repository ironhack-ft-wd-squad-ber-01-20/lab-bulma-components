import React from "react";
import Navbar from "./Navbar";
import CoolButton from "./CoolButton";
import FormField from "./FormField";

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
      <FormField
        label="Password"
        type="password"
        placeholder="A combination of latin small letters, capital letters, and numbers"
      />
      <CoolButton className="button is-success" name="Signup" />
    </div>
  );
};

export default Signup;
