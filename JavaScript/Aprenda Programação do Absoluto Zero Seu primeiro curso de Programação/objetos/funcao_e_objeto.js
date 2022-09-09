//Solução para o problema literal apresentado no arquivo problema_forma_literal.js
function criarData(dia, mes, ano) {
  return {
    dia: dia,
    mes: mes,
    ano: ano,
    exibir: function () {
      return `${this.dia}/${this.mes}/${this.ano}`;
    },
  };
}

const d1 = criarData(07, 09, 2022);
const d2 = criarData(22, 11, 2023);
const d3 = criarData(03, 04, 2022);

console.log(d1.exibir());
console.log(d2.exibir());
console.log(d3.exibir());
