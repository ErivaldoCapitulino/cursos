import React from "react";
import "./App.css";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";
import Fragmento from "./components/basicos/Fragmento";

export default function App() {
  return (
    <div className="Apps">
      <h1>Fundamentos React</h1>
      <div className="Cards">
        <Card titulo="#4 Desafio Aleatório" color="#FA6900">
          <Aleatorio min={1} max={60} />
        </Card>
        <Card titulo="#3 Fragmento" color="#E94C6F">
          <Fragmento />
        </Card>
        <Card titulo="#2 Com Parâmetro" color="#E8B71A">
          <ComParametro
            aluno="Gabriel"
            titulo="Situação do aluno"
            subtitulo="Pedro"
            nota={9.0}
          />
        </Card>
        <Card titulo="#1 Primeiro Componente" color="#588C73">
          <Primeiro></Primeiro>
        </Card>
      </div>
    </div>
  );
}
