function y(){
    console.log(this.length);  //2 
}

var x = {
    length : 5,
    method: function(y){
        arguments[0]();
    }
};

x.method(y, 1);