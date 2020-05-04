import React, { Component } from "react";
import "./app.css";

import { Navbar } from "./components/Navbar.js";
import { FormField } from "./components/FormField.js";
import { CoolButton } from "./components/CoolButton.js";

const App = () => {
  return (
    <div>
      <Navbar />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField
        label="Email"
        type="email"
        placeholder="e.g. alexsmith@gmail.com"
      />
      <CoolButton
        text="Button 1"
        className="button is-rounded is-small is-danger my-class"
      />
      <CoolButton text="Button 2" className="button is-small is-success" />
    </div>
  );
};

export default App;
