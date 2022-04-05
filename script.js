function constfuncs() {
    var funcs = [];
    for(var i = 0; i< 10; i++)
    funcs[i] = function() { return i; };
    return funcs; // 10
    }
    var funcs = constfuncs();
    console.log(func[5]())

/******************************************************************************** */    

function changeStuff(a, b, c)
{
a = a * 10;
b.item = "changed";
c = {item: "changed"};
}

var num = 10;
var obj1 = {item: "unchanged"};
var obj2 = {item: "unchanged"};

changeStuff(num, obj1, obj2);

console.log(num); // 10
console.log(obj1.item);  // changed
console.log(obj2.item); // unchanged

/********************************************************************************************** */

const user = {
    name: "John",
    info: {
      father: "Smith",
      age: 26,
      email: "john@gmail.com"
    },
  };
  
  const copy = { ...user };
  copy.info.father = "Joe";
  
  console.log("original: ", user.info); 
  console.log("copy:", copy.info);

  /****************************************************************************************** */

  (function(){
    var a = b = 3;
  })();
  
  console.log("a defined? " + (typeof a !== 'undefined')); // true
  console.log("b defined? " + (typeof b !== 'undefined')); // false

  /****************************************************************************************** */

  const person = {
	name: "abc",
	age: 20
}

const person1 = person

person1.name = "xyz"

output (person.name)

/******************************************************************************************* */