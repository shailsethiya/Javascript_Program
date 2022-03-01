function x(){
    console.log("hello");  // x call back function 
}

function y(x){ // y hign order function
    x();
}

/**************************************************************************************** */

const radius = [3, 2, 1, 4];

const area = function (radius){
    return Math.PI * radius * radius;
}

const circumference = function (radius){
    return 2* radius ;
}

const diameter = function (radius){
    return 2 * radius ;
}

const calculate = function (radius, logic){
    const Output = [];
    for (let i = 0; i < radius.length; i++){
        Output.push(logic(radius[i]))
    }
    return Output;
};

console.log(calculate(radius, area));
console.log(radius.map(area));
console.log(calculate(radius, circumference));
console.log(calculate(radius, diameter));

/*******************************************************************************/