var  xyz = new Promise((resolve, reject) => {
console.log(resolve);
resolve();
}).then(() => {
   console.log("do this");
}).catch(() => {
    console.log("error");
}).then(() => {
    console.log("do this 2");
});