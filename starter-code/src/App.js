import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import SignUp from './SignUp';

const App = () => {
    const name = {
        user: 'Tim',
        email: 'tim.isAwesome@awesome.com'
    }
    return (
        <div>
            <Navbar data={name} />
            <SignUp />
        </div>
    )
}

export default App;