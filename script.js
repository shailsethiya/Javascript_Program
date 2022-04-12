
function merge(arr1, arr2){
  for(let i = 0; i<=arr2.length-1; i++){
       arr1.push(arr2[i]);
  }
  for(let j = 0; j<= arr1.length -1 ; j++){
      if(arr1[j] > arr2[j+1]){
          temp = arr1[j];
          arr1[j] = arr1[j+1];
          arr1[j+1] = temp;
      }
  }
  return arr1;
}

let arr1 = [1,2,3];
let arr2 = [2,4,6];

merge(arr1, arr2);  

/*========================================================================*/

//spread method

function mergeTwo(arr1, arr2) {
    let result = [...arr1, ...arr2];
    return result.sort((a,b) => a-b);
}

mergeTwo(arr1, arr2)

/*=========================================================================*/

//Reduce Method

const merged = arr2.reduce((arr, item) => {
    arr.push(item);
    return arr;    
}, arr1);

console.log(merged);

/*================================================================================*/

//Spread Method

let array=[1,2,3,5,9]
let array1=[4,6,7,8]

let sortedArray=[...array,...array1].sort()
console.log("sortedArray", sortedArray) 


/*=======================================================================================*/

//Concat method

var a=[1,2,3,5,9];
var b=[4,6,7,8];
var c = a.concat(b).sort((a,b)=>a - b);
console.log("c", c)

/*========================================================================================*/