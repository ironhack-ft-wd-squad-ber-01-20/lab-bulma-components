import React, { Fragment } from "react";

const Message = (props) => {
   return (
        <Fragment>
            <article className="message is-primary">
            <div className="message-header">
                <p>{props.title}</p>
                <button className="delete" aria-label="delete"></button>
            </div>
            <div className="message-body">
                 {props.children}
            </div>
            </article>
        </Fragment>
    )
}

export default Message;
