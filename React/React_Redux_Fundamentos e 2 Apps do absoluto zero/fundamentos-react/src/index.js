import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Primeiro from "./components/basicos/Primeiro";

//const tag = <strong>Olá Mundo</strong>;

ReactDOM.render(
  <div>
    {/* <strong> Olá React!!! </strong> */}
    {/* {tag} */}
    <Primeiro /> <br /> {/** Chamado o primeiro componentes */}
    <Primeiro></Primeiro> {/** Pode ser dessa forma também */}
  </div>,
  document.getElementById("root")
);
