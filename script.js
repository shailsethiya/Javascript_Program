//Hosting 

function abc(){
    console.log(a); // undefined 
    console.log(b); // reference error 
    console.log(c); // reference error 

    //let & const variable hosted in temporal dead zone  
    const c = 30;
    let b = 20;
    var a = 10;
}

abc();


/*=============================================================================*/
//because of hosting it will decalre the value of x on the top of the scope 

var x = 10; 
function test() {
     console.log(x); // undefined 
      var x = 20; 
};
 test();

/*===================================================================================*/

for(var i =0; i<=10; i++) {
    setTimeOut(()=>{
    console.log(i); // 11 print 10 time(bind only one times so last value refer till the loop end). 
    },2000);
    }
    
    console.log(i); // 11

/*======================================================================================*/
   
for(let i =0; i<=10; i++) {
    setTimeOut(()=>{
    console.log(i); // 0-11 print  (every iteration new value bind )
    },2000);
    }
        
    console.log(i); // 11    

 /*=====================================================================================*/   

 for(var i =0; i<=10; i++) { 
    console.log(i);  // 0 - 11 value 
    } 
    
    console.log(i); // 11

/*=====================================================================================*/

for(let i = 0; i<=10; i++) { 
    console.log(i);  // 0 - 11
    } 
    
    console.log(i); // reference error : not defined

 /*====================================================================================*/   

 console.log(a); // undefined 

 console.log(abc);  //  ƒ abc(){ console.log("abc"); }

 var a = "hello";

 function abc(){
     console.log("abc");
 }

 /*====================================================================================*/

 console.log(a); // referece error : a is not defined 

 console.log(abc);

 function abc(){
     console.log("a");
 }

 /*===================================================================================*/

  abc();   // a 

 console.log("hello"); // hello

 function abc(){
     console.log("a");
 }

 /************************************************************************************* */

 console.log(abc);  // ReferenceError: abc is not defined

 const arrowFunc =  () => {
     console.log("arrow fun"); //beacause it's use as variable & assign undefined in the scope.
} 

/*****************************************************************************************/

console.log(abc);  // ReferenceError: abc is not defined

 const arrowFunc =  function () {
     console.log("arrow fun"); //beacause it's use as variable & assign undefined in the scope.
} 

/******************************************************************************************/

