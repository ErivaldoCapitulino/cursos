import ReactDOM from "react-dom/client";
import React from "react";
import "./index.css";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Primeiro /> <br />
    <Primeiro></Primeiro>
    <ComParametro
      aluno="Gabriel"
      titulo="Situação do aluno"
      subtitulo="Pedro"
      nota={9.0}
    />
  </div>
);
