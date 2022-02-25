
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