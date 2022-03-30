//*Deep Copy Example*

let obj = {
  firstName: "shailendra",
  lastName: "sethiya",
  address: {
    cityName: "indore",
    pincode: 458441
  },
  mobile: [25, 26]
};

console.log("obj==", obj);

function deepCopy(obj) {
  let ob = {};
  for (let key in obj) {
    if (Array.isArray(obj[key])) {
      ob[key] = [...obj[key]];
    } else if (obj[key] instanceof Object) {
      ob[key] = deepCopy(obj[key]);
    } else {
      ob[key] = obj[key];
    }
  }
  return ob;
}

const obj2 = deepCopy(obj);
console.log("obj2===", obj2);

/***************************************************************************************************/

var employee = {
  eid: "E102",
  ename: "Jack",
  eaddress: "New York",
  salary: 50000
}
console.log("=========Deep Copy========");
var newEmployee = JSON.parse(JSON.stringify(employee));
console.log("Employee=> ", employee);
console.log("New Employee=> ", newEmployee);
console.log("---------After modification---------");
newEmployee.ename = "Beck";
newEmployee.salary = 70000;
console.log("Employee=> ", employee);
console.log("New Employee=> ", newEmployee);