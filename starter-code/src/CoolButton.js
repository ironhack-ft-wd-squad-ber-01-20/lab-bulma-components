import React from 'react';
import ReactDOM from 'react-dom';

const CoolButton = (props) => {
    return (
        <div>
            <button className="button is-rounded my-class is-danger is-small">Sign Up</button>
            <button className="button is-small is-success">Login</button>
        </div>
    )
}


export default CoolButton;