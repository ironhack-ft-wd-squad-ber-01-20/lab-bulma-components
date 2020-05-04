// Create a Signup component that contains:

// A Navbar
// A form with
// A FormField for name
// An FormField for email
// A FormField for password
// A CoolButton for submitting the form
import React, { Fragment } from 'react'
import CoolButton from './CoolButton';
import Navbar from './Navbar';
import FormField from './FormField';

const Signup = () => {
    return (
        <Fragment>
       <Navbar />
       <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
       <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
       <FormField label="Password" type="password" placeholder="Password" />
      <CoolButton isSmall isDanger className="is-rounded my-class">Submit</CoolButton>
      </Fragment>
    )
}

export default Signup;