//function express
const increment1 = function (n) {
  return n + 1;
};

//Arrow function is always anonymous
const increment2 = (n) => {
  return n + 1;
};

const increment3 = (n) => n + 1;

console.log(increment1(1));
console.log(increment2(5));
console.log(increment3(24));
