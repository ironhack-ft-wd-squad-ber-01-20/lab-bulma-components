import React, { Fragment } from "react";
import Signup from "./Signup";
import Container from "./Container";

const App = () => {
  return (
    <Fragment>
      <Signup />
      <Container className="message" />
    </Fragment>
  );
};

export default App;
