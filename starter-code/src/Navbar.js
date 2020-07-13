import React from "react";
import CoolButton from "./CoolButton";

const Navbar = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="#">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            width="112"
            height="28"
          />
        </a>
        <a
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        ></a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item">Home</a>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <CoolButton name="Login" className="button is-info"></CoolButton>
              <CoolButton
                name="Signup"
                className="button is-primary"
              ></CoolButton>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
