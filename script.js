// closure 
// function remember the reference of i, so all of them copy same reference of i 
function a(){
  for(var i =0; i<3; i++){
    setTimeout(function log(){ 
      console.log(i);
    }, i * 1000)
  }
}

// 3 
// 3
// 3

a();

/*************************************************************************** */

// let is block level scope
function a(){
  for(let i =0; i<3; i++){
    setTimeout(function log(){
      console.log(i);  // create a new copy of i each time (new reference of i) always different memory location
    }, i * 1000)
  }
}

// 0 
// 1
// 2

a();

/******************************************************************************************** */

// work with var, it's work because it's create a new copy of i 
function a(){
    for(var i =0; i<3; i++){
       function close(i){
        setTimeout(function log(){
            console.log(i); 
          }, i * 1000)
       } 
       close(i);
    }
  }
  
  a();