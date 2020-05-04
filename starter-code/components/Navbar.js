import React, { Component } from "react";

const Navbar = () => {
    return (
        <div className="main-container">
            <nav class="navbar is-light">
                <div className="navbar-brand">
                    <a className="navbar-item" href="#">
                        <img
                            src="https://bulma.io/images/bulma-logo.png"
                            alt="Bulma: a modern CSS framework based on Flexbox"
                            width="112"
                            height="28"
                        />
                    </a>
                </div>
                <div
                    id="navbarExampleTransparentExample"
                    className="navbar-menu"
                >
                    <div className="navbar-start">
                        <a className="navbar-item" href="#">
                            Home
                        </a>
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="field is-grouped">
                                <p className="control">
                                    <a className="button is-info" href="#">
                                        <span>Login</span>
                                    </a>
                                </p>
                                <p className="control">
                                    <a className="button is-primary" href="#">
                                        <span>Signup</span>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
