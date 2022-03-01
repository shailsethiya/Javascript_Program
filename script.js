
document.querySelector("#grandparent").addEventListener('click', () => {
    console.log("grand parent");
}, true) // capturing 

document.querySelector("#parent").addEventListener('click', () => {
    console.log("parent");
}, false) // bubbling 

document.querySelector("#child").addEventListener('click', () => {
    console.log("child");
}, true) // capturig 


/* grand parent 
   child
   parent
*/

/*********************************************************************************** */

document.querySelector("#grandparent").addEventListener('click', () => {
    console.log("grand parent");
}, false) 

document.querySelector("#parent").addEventListener('click', (e) => {
    console.log("parent");
    e.stopPropagation();
}, false) // stop propogation 

document.querySelector("#child").addEventListener('click', () => {
    console.log("child");
}, false) 