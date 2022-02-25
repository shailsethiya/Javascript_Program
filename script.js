const a = [1,2,3,1,2,9];

const b = [... new Set(a)];  // find Array dublicate 

console.log(b); // [1,2,3,9]

/*==================================================================================*/

const arr = [1,2,3,1,2,9];

let arr1 = [];

let len = arr.length;

for(let i = 0; i < len; i++){
    if(arr1.indexOf(arr[i]) === -1){
        arr1.push(arr[i])
    }
}

console.log(arr1);  // [1,2,3,9]

/************************************************************************************/

// Count duplicate values from array

const counts = {};
const sampleArray = ["pune", "jaipur", "pune", "mumbai", "mumbai"];
sampleArray.forEach(function (x) { counts[x] = (counts[x] || 0) + 1;console.log(counts, counts[x])});
console.log(counts);  

// {pune : 2, jaipur : 1, mumbai: 2};

// Explanation - 
// We call forEach on arr with a callback that puts the array item x as a property of count .
// Then we update counts[x] as the item x is being found from iteration.
// If count[x] isn’t set yet, then 0 is set as the value of count[x] .


/************************************************************************************** */


//how to count specific value duplicity in array object

const counts = {};
const names = [{id:1,fName:'Shailendra',lName:'Sethiya', age:20},
{id:2,fName:'Shailendra',lName:'Sethiya', age:25},
{id:1,fName:'Shailendra',lName:'Sethiya', age:25}]

names.forEach(function (x) { counts[x.age] = (counts[x.age] || 0) + 1;});
console.log(counts)

// output - {20: 1, 25: 2}