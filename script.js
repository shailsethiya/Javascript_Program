function arm(n){
const number = n;    
const nolength = number.length;
let sum = 0;

 // create a temporary variable
let temp = number;

while (temp > 0) {

let remainder = temp % 10;

sum += remainder ** nolength;

// removing last digit from the number
temp = parseInt(temp / 10); // convert float into integer
}
if (sum == number) {
    alert(`${number} is an Armstrong number`);
}
else {
    alert(`${number} is not an Armstrong number.`);
}
}

console.log(arm(153));