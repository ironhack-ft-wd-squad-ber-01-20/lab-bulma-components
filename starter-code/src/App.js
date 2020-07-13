import React from 'react'
import Navbar from './Navbar';
import FormField from './FormField';
import CoolButton from './CoolButton';  


const App = () => {
    return (
        <div>
            <Navbar/> 
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
            <CoolButton 
            text="Button 1" 
            className="button is-rounded my-class is-danger is-small"
            />
            <CoolButton 
            text="Button 2" 
            className="button is-small is-success"
            />
        </div>
        
    )
}


export default App; 