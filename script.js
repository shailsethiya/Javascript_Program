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

  /***************************************************************************8 */

  var myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo);
        console.log("outer func:  self.foo = " + self.foo);
        (function() {
            console.log("inner func:  this.foo = " + this.foo);
            console.log("inner func:  self.foo = " + self.foo);
        }());
    }
};
myObject.func();

// Output -
// outer func:  this.foo = bar
// outer func:  self.foo = bar
// inner func:  this.foo = undefined
// inner func:  self.foo = bar

/********************************************************************** */