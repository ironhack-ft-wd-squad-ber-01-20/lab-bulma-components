import React, { Component, Fragment } from "react";
import "./style.css"
import Navbar from "./Navbar"
import FormField from "./FormField"

class App extends Component {
    render() {
      return (
          <Fragment>
              <Navbar />
              <div className="lala">
                <h1>Hello and welcome to the Bulma Lab</h1>
              </div>
              <FormField  className="field"/>

          </Fragment>
      );
    }
}
   
export default App;