let a = 1;
let b = 2;

//Esse código é confuso pois na programação o ideal é fazer códigos claros e legiveis para o entendimento
console.log(++a === b++); //resultado é verdade devido a precedencia dos operadores

// o ideal seria dessa forma mesmo tendo mais linhas de códigos, o mesmo é mais legivel para o entendemento
++a;
console.log(a === b);
b++;

console.log(a === b); // false
