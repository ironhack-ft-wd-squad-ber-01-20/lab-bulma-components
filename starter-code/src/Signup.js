import React, { Fragment } from "react";

import FormField from './FormField';
import CoolButton from './CoolButton';

const Signup = () => {
   return (
        <Fragment>
          <div class="container is-fluid">
          <FormField/>
          <CoolButton text="Submit" className="button is-info" />
          </div>
        </Fragment>
    )
}

export default Signup;
