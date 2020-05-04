import React, { Component, Fragment } from "react";
import "./App.css";
import Navbar from "./Navbar"

class App extends Component {
    render() {
      return (
          <Fragment>
              <div className="Navbar">
                <Navbar />
              </div>
              <div className="App">
                <h1> Hello and welcome to the Bulma Lab</h1>
              </div>
          </Fragment>
      );
    }
}
   
export default App;