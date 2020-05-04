import React, { Component, Fragment, FormField } from "react";
import Fields from "./Fields";
import Navbar from "./Navbar";
import Buttons from "./Buttons";




const App = () => {
  return (
<div>
<nav> <Navbar/></nav>
     <div>
         <Fields/>
         <Buttons/>
     </div>
</div>
  )
  
};

export default App;
