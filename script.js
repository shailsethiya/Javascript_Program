const a = [1,2,3,1,2,9];

const b = [... new Set(a)];  // find Array dublicate 

console.log(b);

==================================================================================

const arr = [1,2,3,1,2,9];

let arr1 = [];

let len = arr.length;

for(let i = 0; i < len; i++){
    if(arr1.indexOf(arr[i]) === -1){
        arr1.push(arr[i])
    }
}

console.log(arr1);