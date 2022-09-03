let temDinheiro = true;
let estaEnsolarado = true;
let carroEstaNaGaragem = true;

let resultadoE = "#1 (AND) - Vai proshopping? ";
resultadoE += temDinheiro && estaEnsolarado;

// é preciso que os dois criterios sejam verdadeiros para dar true
console.log(resultadoE);

let resultadoOU = "#2 (OR) - Vai pro shopping? ";
resultadoOU += estaEnsolarado || carroEstaNaGaragem;
console.log(resultadoOU);

// Ou exclusivo esse é para valores binários 0 1
console.log(true ^ false);

console.log(true !== true);
console.log(true !== false);
console.log(false !== true);
console.log(false !== false);

// Operador unário negação lógica
console.log("Não verdadeiro " + !true);
console.log("Não falso: " + !false);
