
let multiply = function (x, y){
    console.log(x * y); 
}

let multiplyByTwo =  multiply.bind(this, 2);
multiplyByTwo(5);

let multiplyByThree =  multiply.bind(this, 3);
multiplyByTwo(5);


// by using bind or closure we can do function curry

let multiply = (x) => {
   return (y) => {
        console.log(x * y);
    }
}

let multiplyByTwo = multiply(2);
multiplyByTwo(3);