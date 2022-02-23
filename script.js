let arr = [[1,2], [1,4]]; 

let flattenArr = [].concat(...arr);

console.log(flattenArr); // [1,2,3,4]


let arr1 = [[1,2], [3,4], [5,6, [7, 8], 9], [10, 11, 12],];

console.log(arr1.flat(2)); //[1,2,3,4,5,6,7,8,9,10,11,12]


function customFlat(arr1, depth = 2){
  let result = [];
  arr1.forEach((ar) => {
    if(Array.isArray(ar) && depth > 0){
      result.push(...customFlat(ar, depth-1));
    } else result.push(ar);
  });

  return result;
}

console.log(customFlat(arr1));
