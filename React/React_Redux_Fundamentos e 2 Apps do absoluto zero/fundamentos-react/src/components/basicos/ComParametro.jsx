import React from "react";

export default function ComParametro(props) {
  console.log(props);
  const status = props.nota >= 7 ? "Aprovado" : "Reprovado";
  return (
    <div>
      <h2>{props.titulo}</h2>
      <h3>
        <strong>{props.aluno}</strong> tem nota {props.nota}
        {status}
      </h3>
    </div>
  );
}
