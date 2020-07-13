import React from "react"; 
import Navbar from "./Navbar";
import FormField from "./FormField"
import CoolButton from "./CoolButton"

const SignUp = () => {

    <Navbar />
    <FormField label="Name" type="text" placeholder="e.g Alex Smith"/>
    <FormField  label="Email" type="email" placeholder="e.g. alexsmith@gmail.com"/>
    <FormField  label="Password" type="password" />
    <CoolButton buttonClass="button is-danger is-rounded" buttonText="Sumbit"/>
   
);
}

export default SignUp;