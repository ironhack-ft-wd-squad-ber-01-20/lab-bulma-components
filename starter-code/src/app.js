import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar is-transparent">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            alt="Bulma: a modern CSS framework based on Flexbox"
            width="112"
            height="28"
          />
        </a>
        <div
          className="navbar-burger burger"
          data-target="navbarExampleTransparentExample"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="navbarExampleTransparentExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item" href="https://bulma.io/">
            Home
          </a>
          <div className="navbar-item has-dropdown is-hoverable">
            <a
              className="navbar-link"
              href="https://bulma.io/documentation/overview/start/"
            >
              Docs
            </a>
            <div className="navbar-dropdown is-boxed">
              <a
                className="navbar-item"
                href="https://bulma.io/documentation/overview/start/"
              >
                Overview
              </a>
              <a
                className="navbar-item"
                href="https://bulma.io/documentation/modifiers/syntax/"
              >
                Modifiers
              </a>
              <a
                className="navbar-item"
                href="https://bulma.io/documentation/columns/basics/"
              >
                Columns
              </a>
              <a
                className="navbar-item"
                href="https://bulma.io/documentation/layout/container/"
              >
                Layout
              </a>
              <a
                className="navbar-item"
                href="https://bulma.io/documentation/form/general/"
              >
                Form
              </a>
              <hr className="navbar-divider" />
              <a
                className="navbar-item"
                href="https://bulma.io/documentation/elements/box/"
              >
                Elements
              </a>
              <a
                className="navbar-item is-active"
                href="https://bulma.io/documentation/components/breadcrumb/"
              >
                Components
              </a>
            </div>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="field is-grouped">
              <p className="control">
                <a
                  className="bd-tw-button button"
                  data-social-network="Twitter"
                  data-social-action="tweet"
                  data-social-target="https://bulma.io"
                  target="_blank"
                  href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=https://bulma.io&amp;via=jgthms"
                >
                  <span className="icon">
                    <i className="fab fa-twitter"></i>
                  </span>
                  <span>Tweet</span>
                </a>
              </p>
              <p className="control">
                <a
                  className="button is-primary"
                  href="https://github.com/jgthms/bulma/releases/download/0.8.0/bulma-0.8.0.zip"
                >
                  <span className="icon">
                    <i className="fas fa-download"></i>
                  </span>
                  <span>Download</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

const FormField = props => {
  return (
    <div className="field">
      <label className="label"> {props.label} </label>
      <input className="input"  type={props.type}   placeholder={props.placeholderProps}  />
    </div>
  );
};

const ButtonField = props => {
  return (
    <div>
      <button className={props.type}>  {props.label}   </button>
         </div>
  );
};

const SignUp = props => {
    return (
      <div>    
         <FormField label="Name" type="text" placeholderProps="Iteration 5  > John Doe" /> 
         <FormField label="email" type="email" placeholderProps=" Iteration 5  > John@Doe" /> 
         <FormField label="password" type="text" placeholderProps=" Iteration 5 > password" /> 
         <ButtonField type="button is-black is-black" label="Iteration 5 >  Sign Up" />
       </div>
    );
  };


const App = () => {
  return (
    <div>
      <Navbar />
      ----------Iteration 2
      <FormField label="Name" type="text" placeholderProps="John Doe" />
      <FormField label="Email" type="email" placeholderProps="john@doe.com" />
    
      ----------Iteration 3
      <ButtonField type="button is-rounded my-class is-danger is-small" label="danger" />
      <ButtonField type="button is-active is-active" label="is active" />
      <ButtonField type="button is-success is-success" label="is success" />
     
      <ButtonField type="button is-black is-black" label="is black" />
      <ButtonField type="button is-large is-large" label="is large " />
      <ButtonField type="button is-loading is-loading" label="loading" />      
 
      ----------Iteration 4
      <FormField label="Name" type="text" placeholderProps="Iteration 4 > your Name here " />
      <FormField label="Email" type="email" placeholderProps="Iteration 4 >  your email here" />
      <FormField label="Password" type="text" placeholderProps="Iteration 4 >  your password here" />
      <ButtonField type="button is-success is-success" label="Iteration 4 >  Sign Up" />
    
      ----------Iteration 5 
      <SignUp></SignUp>

    </div>
  );
};

export default App;
