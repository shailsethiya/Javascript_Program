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


function a(){
  for(let i =0; i<3; i++){
    setTimeout(function log(){
      console.log(i);
    }, i * 1000)
  }
}

// 0 
// 1
// 2

a();
