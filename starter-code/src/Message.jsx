import React from "react";

const Message = () => {
  return (
    <>
      <article class="message">
        <div class="message-header">
          <p>{props.header}}</p>
          <button class="delete" aria-label="delete"></button>
        </div>
        <div class="message-body">
          {props.message} <strong>{props.strong}</strong>
        </div>
      </article>
    </>
  );
};
