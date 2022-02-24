function foo() {
    return bar();
      var bar = function(){
          console.log('bar');  // bar is not a function
      }
  
  }
  
  foo();

/*================================================================================*/
  
function foo() {
    var bar = function(){
        console.log('bar');  // bar 
    }
      return bar();

}

foo();

/*===============================================================================*/

function foo(){
    return bar();
    function bar() {
        console.log('bar');  // bar
    }
}

foo();

/*================================================================================*/

function foo(){
    function bar() {
        console.log('bar');  // bar
    }
    return bar();
}

foo();