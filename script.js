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

names.forEach(function (x) { counts[x.age] = (counts[x.age] || 0) + 1});
console.log(counts)

// output - {20: 1, 25: 2}

/*********************************************************************************** */

//with the help of reduce method

const users = [{id:1,fName:'Shailendra',lName:'Sethiya', age:20},
{id:2,fName:'Shailendra',lName:'Sethiya', age:25},
{id:3,fName:'Shailendra',lName:'Sethiya', age:25}];

const red = users.reduce((acc, curr) => { 
    if(acc[curr.age]){
        acc[curr.age] = ++acc[curr.age];
    } else {
        acc[curr.age] = 1;
    }
    return acc;
    }, {});

    
/**************************************************************************************** */

const person = [{id:1,fName:'Shailendra',lName:'Sethiya', age:20},
{id:2,fName:'Shailendra',lName:'Sethiya', age:25},
{id:3,fName:'Shailendra',lName:'Sethiya', age:25},
{id:4,fName:'Shailendra',lName:'Sethiya', age:25},
{id:5,fName:'Shailendra',lName:'Sethiya', age:20}];

const personFilter = person.reduce((acc, curr) => { 
    if(acc[curr.age]){
        acc[curr.age] = ++acc[curr.age];
    } else {
        acc[curr.age] = 1;
    }
    return acc;
    }, {});

/*********************************************************************************************** */

const personFilter = person.reduce((acc, curr) => { acc[curr.age] ? ++acc[curr.age] : acc[curr.age] = 1;
    return acc;
    }, {});

/********************************************************************************************** */
const obj = {};
for (let user of users) {
obj[user.age] = obj[user.age] + 1 || 1;
}

console.log(obj)
Output - {20: 2, 25:3}

/********************************************************************************************** */

//to find 1st repeated occurrence in array elements

function nonRepeated(arr) {
// created empty object
const obj = {};

for (let user of arr) {
		obj[user] = obj[user] + 1 || 1;
}
// will get array element with count for repeated value
console.log(obj); // { 1: 1, 2: 2, 3: 1 }
for (let elem in obj) {
// return key which value is not equal to 1
	if(obj[elem] !== 1) {
		return elem;
	}
}
	return -1;
}

console.log(nonRepeated([1,2,3,2])); // 2