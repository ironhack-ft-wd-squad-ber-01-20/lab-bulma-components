import React, { Fragment } from 'react'
import CoolButton from './CoolButton';

const Navbar = () => {
    return (
        <Fragment>
        <nav className="navbar" role="navigation" aria-label="main navigation">
  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start">
      <a className="navbar-item">
        Home
      </a>

      <a className="navbar-item">
        Documentation
      </a>

      <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link">
          More
        </a>

        <div className="navbar-dropdown">
          <a className="navbar-item">
            About
          </a>
          <a className="navbar-item">
            Jobs
          </a>
          <a className="navbar-item">
            Contact
          </a>
          <hr className="navbar-divider" />
          <a className="navbar-item">
            Report an issue
          </a>
        </div>
      </div>
    </div>

    <div className="navbar-end">
      <div className="navbar-item">
      <CoolButton isSmall isSuccess className="is-rounded my-class">Login</CoolButton>
      <CoolButton isSmall isSuccess>SignUp</CoolButton>
      </div>
    </div>
  </div>
</nav>
        </Fragment>
    )
}

export default Navbar;