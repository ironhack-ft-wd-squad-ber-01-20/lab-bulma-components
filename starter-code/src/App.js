import React from "react";
import Navbar from "./Navbar";
import FormField from "./FormField";
import CoolButton from "./CoolButton";
import Signup from "./Signup";

const App = () => {
  return (
    <div>
      <Signup />

      {/* <Navbar />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField
        label="Email"
        type="email"
        placeholder="e.g. alexsmith@gmail.com"
      />
      <CoolButton /> */}
    </div>
  );
};

export default App;
