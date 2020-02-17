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
                <a
                  className="button is-info"
                  //   data-social-network="Twitter"
                  //   data-social-action="tweet"
                  data-social-target="https://bulma.io"
                  target="_blank"
                  href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=https://bulma.io&amp;via=jgthms"
                >
                  <span>Login</span>
                </a>
              </p>
              <p className="control">
                <a className="button is-primary" href="../public/signup.html">
                  <span>Signup</span>
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
  const bulma_classes = {
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

  let classes = "button";
  Object.keys(bulma_classes).forEach(key => {
    if (props[key]) {
      classes += " " + bulma_classes[key];
    }
  });
  if (props.className) {
    classes += " " + props.className;
  }

  return <button className={classes}>{props.title} </button>;
};

const Signup = () => {
  return (
    <div>
      <Navbar />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField
        label="Email"
        type="email"
        placeholder="e.g. alexsmith@gmail.com"
      />
      <FormField label="Password" type="password" />
      <CoolButton
        isSmall
        isDanger
        className="is-rounded my-class"
        title="Submit"
      />
    </div>
  );
};

const Container = props => {
  return <div className="container">{props.children}</div>;
};

const Message = props => {
  let classes = "message";
  if (props.isInfo) {
    classes += " is-info";
  }
  return (
    <article className={classes}>
      <div className="message-header">
        <p>{props.title}</p>
      </div>
      <div className="message-body">
        <p>{props.children}</p>
      </div>
    </article>
  );
};

const App = () => {
  return (
    // <div>
    //   <Navbar />
    //   <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
    //   <FormField
    //     label="Email"
    //     type="email"
    //     placeholder="e.g. alexsmith@gmail.com"
    //   />
    //   <CoolButton
    //     isSmall
    //     isDanger
    //     className="is-rounded my-class"
    //     title="Button 1"
    //   />
    //   <CoolButton isSmall isSuccess title="Button 2" />
    // </div>

    //<Signup />
    <Container>
      <Message isInfo title="Hello World">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
        <strong>Pellentesque risus mi</strong>.
      </Message>
    </Container>
  );
};

export default App;
