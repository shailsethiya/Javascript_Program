const a = function(){
    console.log(this);   // window object 
   
    const b = {
      func1: function(){
        console.log(this);  // function 
      }
    }
  
    const c = {
      func2: ()=>{
        console.log(this); // window object
      }
    }
  
    b.func1();
    c.func2();
  }
  
  a();