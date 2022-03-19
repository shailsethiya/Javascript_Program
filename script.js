
/*Sort array*/

var arr  = [2, 5, 6, 3, 4]
arr.sort(function(a, b){return b-a})

//output -  [6, 5, 4, 3, 2]

/*second largest number from array*/

var arr  = [2, 5, 6, 3, 4]
arr.sort(function(a, b){return b-a})
console.log(arr[1]);

// output - 5

/*sort array using for loop*/

function sortArray(array) {
  var temp = 0;
  for (var i = 0; i < array.length; i++) {
    for (var j = i; j < array.length; j++) {
      if (array[j] < array[i]) {
        temp = array[j];
        array[j] = array[i];
        array[i] = temp;
      }
    }
  }
  return array;
}

console.log(sortArray([3,1,2]));

// output - [1, 2, 3]