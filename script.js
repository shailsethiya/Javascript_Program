function abc(){
    console.log(a); // undefined 
    console.log(b); // reference error 
    console.log(c); // reference error 

    //let & const variable hosted in temporal dead zone  
    const c = 30;
    let b = 20;
    var a = 10;
}

abc();