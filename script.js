console.log("start");

setTimeout(function CBT(){
    console.log("CB Settimeout");
}, 5000);

fetch("/url").then(function cbf(){
    console.log("cb netflix");
});


console.log("end");


/* GEX
   first print start // top to bottom
   second print end    // setTimeout & fetch will take time, so js nothing wait here.
   third print cb netflix  // promise callback have prority & it's come in mircotask queue
   fourth print cb settimeout // callback queue after callstack empty immediately event loop send to the callstack.
*/
