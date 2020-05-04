import bulma from "bulma/css/bulma.css";
import React from "react";
import Navbar from "./Navbar";
import FormField from "./FormField";
import ColButton from "./ColButton";

const App = () => {
  return (
    <div>
      <Navbar />
      <FormField />
      <ColButton />
    </div>
  );
};

export default App;
