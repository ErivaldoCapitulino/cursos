const t1 = true;
const t2 = true;

let compraTV50 = t1 && t2;
console.log('Vamos comprar a TV 50"?', compraTV50); //AND

let comprarTV32 = t1 !== t2;
console.log('Vamos comprar a TV 32"?', comprarTV32); // ou exclusivo pode simulado pelo o diverente  XOR

let tomarSorvete = t1 || t2;
console.log('Vamos comprar sorvete"?', tomarSorvete); // OR

let ficarEmCasa = !tomarSorvete;
console.log('Vamos ficar em casa "?', ficarEmCasa); // NOT
