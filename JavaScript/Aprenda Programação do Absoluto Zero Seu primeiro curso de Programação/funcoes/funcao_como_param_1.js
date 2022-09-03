function executar(param) {
  if (typeof param === "function") {
    funcao();
  }
}

function bomDia() {
  return "Bom dia!";
}

executar(3);

const x = bomDia;
const y = bomDia();

console.log(x); // para chamar o resultado nesse caso deveria chamar dessa forma console.log(x());
console.log(y);
