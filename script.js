let arr = [1,2,3,4,5];
arr = [] // first way
console.log(arr);

let arr = [1,2,3,4,5];
arr.length = 0; // second way
console.log(arr);

let arr = [1,2,3,4,5];
arr.splice(0, arr.length) // third way
console.log(arr);

let arr = [1,2,3,4,5];
while(arr.length > 0)
arr.pop();

