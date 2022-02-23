// Composition Polyfill

function addFive(a){
   return a + 5; // 23
}

function substractTwo(a){
  return a - 2; // 18
}

function multiplyFour(a){
  return a * 4;  // 20
}

const compose = (...functions) => {
   return (args) => {
    return functions.reduceRight((arg, fn) => fn(arg), args);
   };
};

const evaluate = compose(addFive, substractTwo, multiplyFour);

console.log(evaluate(5)); // 23