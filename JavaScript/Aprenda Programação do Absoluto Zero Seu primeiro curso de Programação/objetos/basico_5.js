const cliente = {
  codigo: 16532,
  nome: "Ana",
  endereco: {
    logradouro: "Rua ABC",
    numero: 123,
    pontosRef: ["Hospital X", "Shopping y"],
  },
  nomeFilhos: ["Bia", "Carlos", "Gabriel"],
};

console.log(cliente["endereco"]["logradouro"]);
console.log(cliente.endereco.logradouro);
console.log(cliente.endereco.pontosRef[0]);
