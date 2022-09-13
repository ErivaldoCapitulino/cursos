import React from "react";

export default function Aleatorio(props) {
  const min = props.min;
  const max = props.max;
  return (
    <>
      <h1>Números Aleatórios</h1>
      <strong>Resultado: </strong> ={" "}
      {Math.floor(Math.random() * (max - min + 1) + min)}
    </>
  );
}
