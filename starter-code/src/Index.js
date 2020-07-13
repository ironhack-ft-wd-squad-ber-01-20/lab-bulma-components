import React from 'react'
import ReactDOM from 'react-dom'
import Navbar from './Navbar'
import "bulma/css/bulma.css";
import FormField from './FormField'


export default function App() {
    return (
        <div>
            <h1>Hi</h1>
            <Navbar />
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
            <button className="button is-rounded my-class is-danger is-small">Login</button>
            <button className="button is-small is-success">Sign Up</button>

        </div>
    )
}




ReactDOM.render(
<App />,
document.getElementById("root")
);