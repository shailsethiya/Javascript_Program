const revString = (str) =>{
  var revStr = " "
  for(let i = str.length; i >= 0; i--){
       revStr += str[i];
  }
  console.log(revStr);
  return revStr;
}

revString("I am Shailendra");