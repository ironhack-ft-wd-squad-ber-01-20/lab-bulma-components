import React from "react";
import Navbar from "./Navbar";
import FormField from "./FormField";
import CoolButton from "./CoolButton";

const Signup = () => {
    return (
        <div>
            <Navbar />
            <FormField type="text" placeholder="e.g Alex Smith">Name</FormField>
            <FormField type="email" placeholder="e.g. alexsmith@gmail.com">Email</FormField>
            <FormField type="password" placeholder="Password">Password</FormField>
            <CoolButton className="is-small is-success">Submit</CoolButton>
  
        </div>
    );
};


export default Signup;