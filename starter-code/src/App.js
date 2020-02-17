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
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="field is-grouped">
              <p className="control">
                <CoolButton className="bd-tw-button button" href="#">
                  <span>Login</span>
                </CoolButton>
              </p>
              <p className="control">
                <CoolButton className="button is-primary" href="#">
                  <span>Signup</span>
                </CoolButton>
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
      <label className="label">{props.label}</label>
      <div className="control">
        <input
          className="input"
          type={props.type}
          placeholder={props.placeholder}
        />
      </div>
    </div>
  );
};

const CoolButton = props => {
  let obj = {
    isActive: "is-active",
    isBlack: "is-black",
    isCentered: "is-centered",
    isDanger: "is-danger",
    isDark: "is-dark",
    isFocused: "is-focused",
    isGrouped: "is-grouped",
    isHovered: "is-hovered",
    isInfo: "is-info",
    isInverted: "is-inverted",
    isLarge: "is-large",
    isLight: "is-light",
    isLink: "is-link",
    isLoading: "is-loading",
    isMedium: "is-medium",
    isOutlined: "is-outlined",
    isPrimary: "is-primary",
    isRight: "is-right",
    isRounded: "is-rounded",
    isSelected: "is-selected",
    isSmall: "is-small",
    isStatic: "is-static",
    isSuccess: "is-success",
    isText: "is-text",
    isWarning: "is-warning",
    isWhite: "is-white"
  };

  let classes = "button ";
  console.log(props);
  Object.keys(obj).forEach(key => {
    if (props[key]) {
      classes += obj[key] + " ";
    }
  });
  if (props.className) {
    classes += props.className;
  }

  return <button className={classes}>{props.children}</button>;
};

const Signup = () => {
  return (
    <div>
      <Navbar />
      <FormField label="Name" type="text" placeholder="e.g. Alex Smith" />
      <FormField
        label="Email"
        type="type"
        placeholder="e.g. alexsmith@gmail.com"
      />
      <FormField label="Password" type="password" />
      <CoolButton isSmall isSuccess>
        Signup
      </CoolButton>
    </div>
  );
};

const Message = props => {
  return (
    <article className="message is-info">
      <div className="message-header">
        <p>{props.title}</p>
        <button className="delete" aria-label="delete"></button>
      </div>
      <div className="message-body">{props.children}</div>
    </article>
  );
};

const Container = () => {
  return (
    <div>
      <Signup />
      <Message isInfo title="Hello World">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
        <strong>Pellentesque risus mi</strong>.
      </Message>
    </div>
  );
};

const App = () => {
  return <Container />;
};

export default App;
