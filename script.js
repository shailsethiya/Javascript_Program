let obj = {
  firstName: "shailendra",
  lastName: "sethiya",
  address: {
    cityName: "indore",
    pincode: 458441
  },
  mobile: [25, 26]
};

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
console.log(obj2);