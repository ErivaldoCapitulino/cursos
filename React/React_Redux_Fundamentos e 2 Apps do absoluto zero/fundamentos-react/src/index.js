import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const tag = <strong>Olá Mundo</strong>;

ReactDOM.render(
  <div>
    <strong> Olá React!!! </strong>
    {tag}
  </div>,
  document.getElementById("root")
);
