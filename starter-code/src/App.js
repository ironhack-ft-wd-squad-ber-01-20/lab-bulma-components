import React from "react";
import "bulma/css/bulma.css";
import Signup from "./Signup";
import Message from "./Message";

const App = () => {
  return (
    <div>
      <Signup />
      <br />
      <Message
        header="Hello World"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        strong="Pellentesque risus mi"
      />
    </div>
  );
};

export default App;
