
let initialArray = [2, 3, 4, 5, 6, 4, 3, 5, 5];

initialArray.reduce(function(result, value, index, array) {
  if (index % 2 === 0)
    result.push(array.slice(index, index + 2));
  return result;
}, []);