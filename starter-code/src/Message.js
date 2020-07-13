import React from "react";

const Message = (props) => {
  return (
    <div>
      <article className="message is-info">
        <div className="message-header">
          <p>{props.header}</p>
          <button className="delete" aria-label="delete"></button>
        </div>
        <div className="message-body">
          {props.body}
          <strong>{props.strong}</strong>
        </div>
      </article>
    </div>
  );
};

export default Message;
