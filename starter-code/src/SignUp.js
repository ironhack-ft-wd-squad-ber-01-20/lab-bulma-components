import React, {Fragment} from 'react';
// import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import FormField from './FormField'
import CoolButton from './CoolButton'

const SignUp = () => {
    return (
            <>
                <Navbar />
                <FormField name='Name' />
                <FormField name='Email' />
                <FormField name='Password' />
                <CoolButton name='Sign Up'/>
        
            </>
            
        )
}

export default SignUp;