//1*1*1 + 5*5*5 + 3*3*3 = 1 + 125 + 27

function arm(n){
const number = n;    
let sum = 0;

 // create a temporary variable
let temp = number;

while (temp > 0) {

let rem = temp % 10;

sum += rem * rem * rem;

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