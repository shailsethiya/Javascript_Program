
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