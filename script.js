// Map, Filter and Reduce
// Polyfill for map()


Array.prototype.myMap = function(cb){
   let temp = [];
   for (let i =0; i< this.length; i++){
     temp.push(cb(this[i], i, this));
   }
   return temp;
};


// Polyfill for filter()

Array.prototype.myFilter = function (cb){
  let temp = [];
  for(let i=0; i< this.length; i++){
    if(cb(this[i], i, this))
    temp.push(this[i]);
  }
  return temp;
}


// polyfill for reduce()

Array.prototype.myReduce = function(cb, initialValue){
  var accumulator = initialValue;

  for(let i =0; i< this.length; i++){
    accumulator = accumulator? cb(accumulator, this[i], i, this) : this[i];
  }

  return  accumulator;
};