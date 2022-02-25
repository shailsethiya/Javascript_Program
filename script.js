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