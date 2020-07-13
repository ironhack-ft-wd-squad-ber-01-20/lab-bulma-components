import React from "react";
import Navbar from './Navbar';
import FormField from './FormField';
import CoolButton from './CoolButton';  

const Signup = () => {
    return(
        <div>
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
            <FormField label="Password" type="password" placeholder="password" />
            <CoolButton 
            text="Signup" 
            className="button is-rounded my-class is-danger is-small"
            /> 
        </div>
        
    )
}



export default Signup;