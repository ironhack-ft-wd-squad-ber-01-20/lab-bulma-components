import React from "react";
import Navbar from "./Navbar";
import FormField from "./FormField";
import CoolButton from "./CoolButton";

const Signup = (props) => {
  return (
    <div>
      <Navbar />
      <div class="container is-desktop">
        <div class="columns">
          <div class="column is-half">
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField
              label="Email"
              type="email"
              placeholder="e.g. alexsmith@gmail.com"
            />
            <FormField
              label="password"
              type="password"
              placeholder="password"
            />

            <CoolButton text="Submit" className="button  is-info" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Signup;
