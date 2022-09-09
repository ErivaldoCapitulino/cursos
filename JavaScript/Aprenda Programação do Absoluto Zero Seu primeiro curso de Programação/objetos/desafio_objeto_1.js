// Data (dia / mes / ano)
// Atributos: dia, mes e ano
// Método: exibir -> "dia/mes/ano"

const data = {
  dia: "07",
  mes: "09",
  ano: "2022",
  exibir: function () {
    return `${this.dia}/${this.mes}/${this.ano}`; // this referencia a esse objeto
  },
};

// function exibir() {
//   console.log(`${data.dia}/${data.mes}/${data.ano}`);
// }
// exibir()

console.log(data.exibir());
