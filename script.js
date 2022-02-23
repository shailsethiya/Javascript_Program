function findsmallestNowWithoutMethod() {
  let array = [3 , 6, 2, 56, 32, 5, 89, 32];
  let smallest= array[0];
  
  for (i=0; i<=array.length;i++){
      if (array[i] < smallest) {
        smallest=array[i];
      }
  }
  console.log(smallest);
}

findsmallestNowWithoutMethod();