function retornaUmaFuncao() {
  function bomDia() {
    return "Bom dia!!!";
  }
  return bomDia;
}

console.log(retornaUmaFuncao);
console.log(retornaUmaFuncao());
console.log(retornaUmaFuncao()());
const umFuncao = retornaUmaFuncao();
console.log(umFuncao());
