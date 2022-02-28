//Closure

//A Closure bind together with it's lexical envirnoment 

// function along with lexical scope form a closure

function a(){
    let a = 11;
    function b(){
      console.log(a);
    }
    b();
}
a();

/****************************************************************************/

function x(){
    var a = 7;
    function y(){
        console.log(a); // 7 
    }
    return y;
}

var z = x();
console.log(z); // y(){ console.log(a); }

//....

z();

/*************************************************************************************** */

function x(){
    var a = 7;
    function y(){
        console.log(a); // 100
    }
    a = 100;
    return y;
}

var z = x();
console.log(z); // y(){ console.log(a); }

//....

z()

/******************************************************************************************/

function z() {
    var b = 900;
    function x() {
        var a = 4;
      function y(){
          console.log(a, b);  // 4, 900
      }  
      y(); 
    }
    x();
}
z();