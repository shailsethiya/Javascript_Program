//function Statement && function declaration 
function a(){
    console.log(a);
}
a();

//function Expression 
var a = function (){
    console.log(a);
}
a();

// first class function or first class citizen-- 
// the ability to use function as a value or pass the function as a paramater  is called first class function

var b = function(param1){
    return function xyz() {

    }
}

console.log(b());