import React from 'react';
import ReactDOM from 'react-dom';
import FormField from './FormField';
import CoolButton from './CoolButton';

const SignUp = () => {
    return (
        <div>
            <FormField label="Name" type="text" placeholder="Alex Smith" />
            <FormField label="email" type="email" placeholder="alexsmith@gmail.com" />
            <FormField label="password" type="text" placeholder="password" />
            <CoolButton type="button is-primary" label="Sign Up" />
        </div>
    )
}

export default SignUp;