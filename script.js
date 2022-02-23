//call vs apply vs bind

var person = {
  name: "shailendra sethiya",
  hello: function (thing) {
    console.log(this.name+ " says hello " + thing);
  },
};

var alterEgo = {
  name: "ss",
};

person.hello.call(alterEgo, "world"); // call 
person.hello.apply(alterEgo, ["world"]); // apply
const newHello = person.hello.bind(alterEgo); // bind
newHello("world");