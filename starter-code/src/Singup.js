import React from "react";
import Navbar from "./Navbar";
import CoolButton from "./CoolButton";
import FormField from "./FormField";


const Signup = () => {
    return(
        <div>
            <Navbar/>
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField
        label="Email"
        type="email"
        placeholder="e.g. alexsmith@gmail.com"
      />
       <CoolButton className="button is-success" text="Submit" />
        </div>
    )
}

export default Signup;