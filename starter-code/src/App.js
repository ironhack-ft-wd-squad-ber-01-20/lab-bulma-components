import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar is-light">
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
                    <i className="fab fa-login"></i>
                  </span>
                  <span>Login</span>
                </a>
              </p>
              <p className="control">
                <a
                  className="button is-primary"
                  href="https://github.com/jgthms/bulma/releases/download/0.8.0/bulma-0.8.0.zip"
                >
                  <span className="icon">
                    <i className="fas fa-signup"></i>
                  </span>
                  <span>Signup</span>
                </a>
              </p>
            </div>
          </div>
        </div>
    </nav>
  );
};

const FormField = props => {
  return (
<div class="container is-fullhd">
  <div class="notification"> 
    <div className="field">
      <label className="label"> {props.label} </label>
      <input className="input"  type={props.type}  placeholder={props.placeholderProps}  />
    </div>
  </div>
</div>
  );
};

const CoolButton = props => {
  return (
    <div>
      <button className={props.type}>  {props.label}   </button>
         </div>
  );
};

const SignUp = props => {
    return (
      <div>    
         <FormField label="Name" type="text" placeholderProps="Alex Smith" /> 
         <FormField label="email" type="email" placeholderProps="alexsmith@gmail.com" /> 
         <FormField label="password" type="text" placeholderProps="password" /> 
         <CoolButton type="button is-primary" label="Sign Up" />
       </div>
    );
  };

const Message = props => {
    return (
<article class="message is-info">
  <div class="message-header">
    <p>Hello World</p>
    <button class="delete" aria-label="delete"></button>
  </div>
  <div class="message-body">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
  </div>
</article>  
    );
  };

const App = () => {
  return (
    <div>
      <Navbar />
      <Message />
      <FormField label="Name" type="text" placeholderProps="Alex Smith" />
      <FormField label="Email" type="email" placeholderProps="alexsmith@gmail.com" />

      <div class="columns">
      <div class="column">
      <CoolButton type="button is-danger is-rounded" label="danger" />
      </div>
      <div class="column">
      <CoolButton type="button is-active is-active" label="is active" />
      </div>
      <div class="column">
      <CoolButton type="button is-success is-success" label="is success" /> 
      </div>
      <div class="column">
      <CoolButton type="button is-primary" label="is primary" />
      </div>
      </div>

      <SignUp></SignUp>

    </div>
  );
};

export default App;