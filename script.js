console.log([] + []); // nothing 
console.log({} + []); // [object Object]
const x = 'constructor';
console.log(x[x](01)); // 1
console.log(0.1 + 0.2); // 0.30000000000000004
console.log(console.log(('h1').__proto__.__proto__.__proto__)); // null

var courses = ["JavaScript","Java","C","C++","Python"];
delete courses[2];
console.log(courses.length);  // 5 

console.log(typeof typeof 1); // string 

const ans = ['jacket', 't-shirt'];
ans.length = 0;
ans[0]; // => ??? // undefined 

var foo; //variable without value
function foo() {} // same variable with function 

console.log(foo); // ƒ foo() {}

var foo = 10; // decalared variable with value
function foo() {} // same variable declared with function

console.log(foo); // 10

for (let i = 0; i < 3 ; i ++) {
    var log = function() {
        console.log(i);
    }
    setTimeout(log, 100);
}
output - 0,1,2

let numbers = [1,4,9];
let doubles = numbers.map(function(num) {
    return num * 2;
})
console.log(numbers, doubles) // [1, 4, 9]  [2, 8, 18]

//Original array will not change in map

0 || null // null
0 && null // 0
1 && null // null
1 || null // 1

["1", "2", "3"].map(parseInt) 
output - [1, NaN, NaN]

/****************************************************************** */

const numbers = [7, 5, 7, 6, 6, 4];
let duplicate = null;
for (let i = 0; i < numbers.length; i++) {
  if (numbers.indexOf(numbers[i]) !== i) {
    duplicate = numbers[i];
    break; // stop cycle 
  }
}
console.log(duplicate);   //7

/******************************************************************** */

//if we use + operator within array it will concat

console.log([1,2]+[2,4]) 1,22,4
console.log([1]+[2]) // 12
console.log([-1]+[-2]) -1-2

/******************************************************************* */

//convert multidimentional to one dimentional

const arr =[1,2,[0,9],[3,4,[5,6,[9,10]]]];

console.log(arr.flat(Infinity)); // [1,2,0,9,3,4,5,6,9,10]