import React from "react";
import ReactDOM from "react-dom";

const tag = <strong>Olá Mundo</strong>;

ReactDOM.render(
  <div>
    <strong> Olá React!!! </strong>
    {tag}
  </div>,
  document.getElementById("root")
);
