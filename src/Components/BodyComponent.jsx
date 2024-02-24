import React from "react";
import Content from "./content";
import Login from "./login";
import { useState } from "react";

const BodyComponent = () => {
  const [body, setBody] = useState(<Content />);

  function handleLoginClick() {
    setBody(<Login />);
  }

  return <div>{body}</div>;
};

export default BodyComponent;
