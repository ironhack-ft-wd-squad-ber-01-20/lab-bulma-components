import React, { Component, Fragment } from "react";

const Fields = (props) => {
  return (
    <Fragment>
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField
        label="Email"
        type="email"
        placeholder="e.g. alexsmith@gmail.com"
      />
    </Fragment>
  );
};

const FormField = (props) => {
  return (
    <Fragment>
      <div className="field">
        <label className="label">{props.label}</label>
        <div className="control">
          <input className="input" /> {props.placeholder}
        </div>
      </div>
    </Fragment>
  );
};

export default Fields;
