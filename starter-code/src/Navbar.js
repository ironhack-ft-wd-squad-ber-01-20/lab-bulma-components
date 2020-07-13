import React, { Fragment } from 'react'

import CoolButton from './CoolButton';


const Navbar = () => {
   return (
    <Fragment>
      <nav className="navbar is-transparent" >
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
          </a>
          <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div id="navbarExampleTransparentExample" className="navbar-menu">
        

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="field is-grouped">

                <p className="control">
                <CoolButton text="Signup" className="button is-info" />
                <CoolButton text="Login" className="button is-primary is-outlined" />

                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
   )
}
 
export default Navbar;