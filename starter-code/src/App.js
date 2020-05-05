import React, { Component, Fragment } from "react";
import "./style.css"
import Navbar from "./Navbar"
import FormField from "./FormField"
import CoolButton from "./CoolButton";

class App extends Component {
    render() {
      return (
          <Fragment>
              <Navbar />
              <div className="lala">
                <h1>Hello and welcome to the Bulma Lab</h1>
              </div>
              <FormField  className="field"/>
              <div className="cool">
                <CoolButton danger="Button 1" success="Button 2"/>
              </div>
          </Fragment>
      );
    }
}
   
export default App;