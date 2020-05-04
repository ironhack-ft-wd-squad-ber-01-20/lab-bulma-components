import React, { Component } from "react";
import Nav from "./Nav.js";
import FormField from "./FormField.js";
import Button from "./CoolButton.js";

export default class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <FormField />
        <Button />
      </div>
    );
  }
}
