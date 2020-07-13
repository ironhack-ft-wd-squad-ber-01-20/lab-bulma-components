import React from "react"; 
import CoolButton from "./CoolButton"

const Navbar = () => {
    return (
        <div id="navbar"> 
       <nav className="navbar" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <a className="navbar-item" href="https://bulma.io">
      <img
        src="https://bulma.io/images/bulma-logo.png"
        width={112}
        height={28}
      />
    </a>
    <a
      role="button"
      className="navbar-burger burger"
      aria-label="menu"
      aria-expanded="false"
      data-target="navbarBasicExample"
    >
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      <span aria-hidden="true" />
    </a>
  </div>
  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start">
      
       
      <div className="navbar-item has-dropdown is-hoverable">
       
        <div className="navbar-dropdown">
          
        </div>
      </div>
    </div>

        <CoolButton buttonClass="button is-danger is-rounded" buttonText="Sign up"/>
        <CoolButton buttonClass="button is-success" buttonText="Log in"/>
  </div>
</nav>

        </div>
      );
}

export default Navbar