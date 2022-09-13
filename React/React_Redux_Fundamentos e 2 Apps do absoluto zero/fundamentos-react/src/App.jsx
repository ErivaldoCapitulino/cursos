import React, { Fragment } from "react";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";
import Fragmento from "./components/basicos/Fragmento";

export default function App() {
  return (
    <div>
      <Card titulo="Desafio Aleatório">
        <Aleatorio min={1} max={60} />
      </Card>
      <Card titulo="Fragmento">
        <Fragmento />
      </Card>
      <Card titulo="Com Parâmetro">
        <ComParametro
          aluno="Gabriel"
          titulo="Situação do aluno"
          subtitulo="Pedro"
          nota={9.0}
        />
      </Card>
      <Card titulo="Primerio Componente">
        <Primeiro></Primeiro>
      </Card>
    </div>
  );
}
