function secondMax() {
  var arr = [20, 120, 111, 215, 54, 78]; // use int arrays
  var max = Math.max.apply(null, arr); // get the max of the array
  arr.splice(arr.indexOf(max), 1); // remove max from the array
  console.log(Math.max.apply(null, arr));
  return Math.max.apply(null, arr); // get the 2nd max
}

secondMax();