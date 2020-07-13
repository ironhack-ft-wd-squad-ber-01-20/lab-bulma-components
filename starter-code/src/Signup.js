import React, { Fragment } from "react";

import FormField from "./FormField";
import CoolButton from "./CoolButton";

const Signup = () => {
  return (
    <Fragment>
      <div class="container is-fluid">
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField
          label="Email"
          type="email"
          placeholder="e.g. alexsmith@gmail.com"
        />
        <FormField label="password" type="password" placeholder="password" />{" "}
        <CoolButton text="Submit" className="button is-info" />
      </div>
    </Fragment>
  );
};

export default Signup;
