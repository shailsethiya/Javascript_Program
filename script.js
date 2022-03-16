
var obj = {next: ""}; 

if (obj.next) { 

alert("property exist"); 

} else { 

alert("property doesn't exist");   //   property doesn't exist

}


/***********************************************************************/

// var, let & const 
var a = {
    firstName: 'firstPersonName'
  }
  var b = a;
  b.firstName = 'secondPersonName';
  console.log(a.firstName);   // secondPersonName


  /*************************************************************************/

  //How to get value of specific key from array object

    const arr = [{name: 'Person1', age: 26}, {name: 'Person2', age: 34}];
    arr.map((value) => value.name);

    Output-  ['Person1', 'Person2']

    /****************************************************************** */

    console.log(a); // undefined
    var a= 9;
    function Foo()
    {  console.log(a); // undefined
      var a = 99;
      console.log(a); // 99
    }
    Foo();
    console.log(a); // 9

    /********************************************************************* */

    var myObject = {
        foo: "bar",
        func: function() {
            var self = this;
            console.log("outer func:  this.foo = " + this.foo); //bar
            console.log("outer func:  self.foo = " + self.foo); //bar
            (function() {
                console.log("inner func:  this.foo = " + this.foo);  // undefined
                console.log("inner func:  self.foo = " + self.foo);  // bar
            }());
        }
    };
    myObject.func();

    /**************************************************************************** */

    for(var i=0;i<5;i++){
        setInterval(console.log(i),0)
      };

    //Output - 0,1,2,3,4

    /****************************************************************************** */