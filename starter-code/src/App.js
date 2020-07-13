import React, { Fragment } from 'react'
// import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import "bulma/css/bulma.css";

import Navbar from './Navbar';
import Signup from './Signup';
import Container from './Container';


const App = () => {
   return (
    <Fragment>
      <Navbar />
      <Signup />
      <br />
      <Container />
    </Fragment>
    )
}

export default App;