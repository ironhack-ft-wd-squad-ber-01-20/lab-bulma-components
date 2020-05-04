import React, { Component, Fragment } from "react";

class Navbar extends Component {
    render() {
      return (
          <Fragment>
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
                  <div className="buttons">
                    <a className="button is-info">
                      <span>Login</span>
                    </a>
                    <a className="button is-primary" href="/signup">
                      <span>Signup</span>
                    </a>
                  </div>
                </div>
              </div>
              
            </nav>
          </Fragment>
      );
    }
}
   
export default Navbar;