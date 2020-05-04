import React from 'react'
import Navbar from './Navbar';
import Formfield from './FormField'
import CoolButton from './CoolButton';
import FormField from './FormField';
import Message from  './Message';


const Signup =()=>{
    return (
        <div>
        <Navbar/>
        <div style={{
            width:'20rem',
            margin:'auto'
        }}>
        <FormField label="Name" type="text" placeholder="e.g Alex Smith"/>
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com"/>
        <FormField label="Password" type="password" placeholder="password here"/>
<CoolButton className="submit button is-small is-success" title="Sign Up" ></CoolButton>
        <Message/>
        </div>
        </div>
    )
}

export default Signup;