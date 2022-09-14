import React from "react";
import produtos from "../../data/produtos";
import "./ListaProdutos.css";

const ListaProdutos = (props) => {
  const getPrdotudo = produtos.map((produto, i) => {
    return (
      <tr key={produto.id} className={i % 2 === 0 ? "Par" : "Impar"}>
        <td>{produto.id}</td>
        <td>{produto.nome}</td>
        <td>{produto.preco}</td>
      </tr>
    );
  });

  return (
    <div className="TabelaProdutos">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>nome</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>{getPrdotudo}</tbody>
      </table>
    </div>
  );
};

export default ListaProdutos;
