import React from "react";
import "./FamiliaMembro";
import FamiliaMembro from "./FamiliaMembro";

const Familia = (props) => {
  return (
    <div>
      <FamiliaMembro nome="Erivaldo" sobrenome={props.sobrenome} />
      <FamiliaMembro nome="Gabriel" {...props} />
      <FamiliaMembro nome="Patricia" sobrenome="Silva" />
    </div>
  );
};

export default Familia;
