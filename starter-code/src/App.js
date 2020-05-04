import React from "react";
import Navbar from "./Navbar";
import FormField from "./FormField";
import CoolButton from "./CoolButton";
import Signup from "./Signup";
import Message from "./Message";


const App = () => {
  return (
    <div>
      <Signup />
      <Message isInfo title="Hello World">Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            <strong>Pellentesque risus mi</strong>.</Message>
    </div>
    
  );
};

export default App;
