function range(start, end) {
    return Array(end - start + 1).fill().map((_, idx) => start + idx)
  }
  var result = range(9, 18); // [9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
  console.log(result);

  /******************************************************************************** */

  const arr = Array.from(Array(10).keys());
  console.log(arr);

  /********************************************************************************** */

  const arr1  = [...Array(10).keys()];
  console.log(arr1);

  /*************************************************************************************** */