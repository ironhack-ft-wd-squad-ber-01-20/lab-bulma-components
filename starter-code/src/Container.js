import React, { Fragment } from "react";

import Message from './Message';


const Container = () => {
   return (
        <Fragment>
          <div className="container is-fluid">
          <Message isInfo title="Hello World">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
             <strong>Pellentesque risus mi</strong>.
          </Message>
          </div>
        </Fragment>
    )
}

export default Container;
