import React from "react";
//import { Button } from "react-bootstrap";

const Buttons = props => {
  const { showNameConsole } = props;

  return (
    <button onClick={() => showNameConsole(5 * (3 * 3))}>Hacer clic</button>
  );
};

export default Buttons;
