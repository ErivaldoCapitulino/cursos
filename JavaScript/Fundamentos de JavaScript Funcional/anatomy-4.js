//Anonymos function
//IIFE - Immediately invoked function expression
(function (a, b, c) {
  console.log(`Result: ${a + b + c}`);
})(1, 2, 3); // Está sendo chamada imediatamente

(function () {
  let x = 300;
  console.log(x);
})();

(() => {
  console.log("Arrow #01");
})();
