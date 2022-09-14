import React from "react";
import "./App.css";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";
import Fragmento from "./components/basicos/Fragmento";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import ListaProdutos from "./components/repeticao/ListaProdutos";

export default function App() {
  return (
    <div className="Apps">
      <h1>Fundamentos React</h1>
      <div className="Cards">
        <Card titulo="#7 Desafio Repetição" color="#3A9AD9">
          <ListaProdutos />
        </Card>

        <Card titulo="#6 Repetição" color="#FF4C65">
          <ListaAlunos />
        </Card>

        <Card titulo="#5 Componente com Filhos" color="#00C8F8">
          <Familia sobrenome="Silva">
            <FamiliaMembro nome="Erivaldo" />
            <FamiliaMembro nome="Gabriel" />
            <FamiliaMembro nome="Patricia" />
          </Familia>
        </Card>

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
