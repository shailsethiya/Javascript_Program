function secondMax() {
  const arr = [20, 120, 111, 215, 54, 78]; // use int arrays
  const min = Math.min.apply(null, arr); // get the max of the array
  arr.splice(arr.indexOf(min), 1); // remove max from the array
  console.log(Math.min.apply(null, arr));
  return Math.min.apply(null, arr); // get the 2nd max
}

secondMax();