import React from "react";

const FamiliaMembro = (props) => {
  console.log(props);
  return (
    <div>
      {props.nome} <strong> {props.sobrenome}</strong>
    </div>
  );
};

export default FamiliaMembro;
