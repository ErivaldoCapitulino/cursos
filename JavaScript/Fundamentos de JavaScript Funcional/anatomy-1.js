// Function Declaration

//Não recebe parâmetros e nem tem retorno
function sayHello() {
  console.log("Hello");
}
sayHello();

//Não tem retorno mas recebe parâmetros
function sayHelloTo(name) {
  console.log(`Hello ${name}`);
}
sayHelloTo("Mike");

//Não recebi parâmetros mas tem retorno
function returnHi() {
  return "Hi!";
}
const greeting = returnHi();
console.log(greeting);
//ou
console.log(returnHi());

// Tem parâmetro e tem retorno
function returnHiTo(name) {
  return `Hi ${name}`;
}
console.log(returnHiTo("John"));
