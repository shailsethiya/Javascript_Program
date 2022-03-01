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

/**************************************************************************************** */

Promise.resolve().then(() => console.log(2));
console.log(1); // 1,2 


/**************************************************************************************** */

// Promise.all() - Wait for all promises to be resolved, or for any to be rejected.
// Promise.allSettled() - Wait until all promises have settled (each may resolve or reject).
