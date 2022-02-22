// program to find the factorial of a number

function factorial(n){
// checking if number is negative
if (n < 0) {
    console.log('Error! Factorial for negative number does not exist.');
}

// if number is 0
else if (n === 0) {
    console.log(`The factorial of ${n} is 1.`);
}

// if number is positive
else {
    let fact = 1;
    for (i = 1; i <= n; i++) {
        fact *= i;
    }
    alert(`The factorial of ${n} is ${fact}.`);
}
}

factorial(5);