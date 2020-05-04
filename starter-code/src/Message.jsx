import React from "react";

const Message = (props) => {
  return (
    <>
      <article className="message">
        <div className="message-header">
          <p>{props.title}</p>
          <button className="delete" aria-label="delete"></button>
        </div>
        <div className="message-body">{props.children}</div>
      </article>
    </>
  );
};

export default Message;
