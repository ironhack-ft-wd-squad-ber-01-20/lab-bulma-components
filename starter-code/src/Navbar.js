import React, { Component, Fragment } from "react";
import CoolButton from "./CoolButton.js"


class Navbar extends Component {
    render() {
      return (
          <nav className="navbar is-transparent">
            
            <div className="navbar-brand">
              <a className="navbar-item" href="https://bulma.io">
                <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: Free, open source, and modern CSS framework based on Flexbox" width="112" height="28"/>
              </a>

              <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>
            
            <div className="navbar-menu">
              
              <div className="navbar-start">
                <a className="navbar-item" href="https://bulma.io/">
                  Home
                </a>
              </div>
            </div>
            
            <div className="navbar-end">
              <div className="navbar-item">
                <div className="field is-grouped">
                  <p className="control">
                    <CoolButton className="is-rounded is-danger" buttonLabel="Login"/>
                  </p>
                  <p>
                    <CoolButton className="is-success" buttonLabel="Signup"/>
                  </p>
                </div>
              </div>
            </div>
            
          </nav>
      );
    }
}
   
export default Navbar;