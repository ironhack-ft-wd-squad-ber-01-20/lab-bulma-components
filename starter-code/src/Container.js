import React from "react";
import Message from "./Message";
const Container = () => {
  return (
    <Message isInfo title="Hello World">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
      <strong>Pellentesque risus mi</strong>.
    </Message>
  );
};
export default Container;
