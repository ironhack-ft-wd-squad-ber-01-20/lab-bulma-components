import React from 'react'
import Navbar from './Navbar';
import FormField from './FormField';
import CoolButton from './CoolButton';  
import Signup from './Signup'; 


const App = () => {
    const user = {
        name: "whatever", 
    }
    return (
        <div>
            <Navbar data={user}/> 
            <Signup />
        </div>
        
    )
}


export default App; 