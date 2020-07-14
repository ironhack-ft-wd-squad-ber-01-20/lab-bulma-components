import React from "react";
import FormField from "./FormField";
import CoolButton from "./CoolButton";

const Signup = props => {
  return (
    <form>
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com"/>
      <FormField label="Password" type="password" placeholder="password" />
      <CoolButton isSmall isSuccess type="submit"> Sign Up </CoolButton>
    </form>
  );
};

export default Signup;