// promise All

function showText(text, time){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(text);
    }, time);
  });

}

// polyfill
function myPromiseAll(promises){
  let result = [];
  return new Promise((resolve, reject) => {
    promises.forEach((p, index) => {
       p.then((res) => {
         result.push(res);
         if(index === promises.length -1){
           resolve(result);
         }
       }).catch((err) => reject(err)); 
    });
  });
}

// it will take promises if all of them are resolved it return all of the resolved result.
// if any promise failed then all of the promises failed 

Promise.all([showText("hello", 1000), Promise.resolve("hi")]).then((value) =>
 console.log(value)
 );