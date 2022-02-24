object == object (false)
object === object(false)
[] == [] (false)
[] === [] (false)
0.1 + 0.2 == 0.3 (false)
NaN==NaN(false)
NaN===NaN(false)
typeOf NAN (Number)
10+5+”abc” =15abc
“abc”+10+5 = abc105 
isNaN('123') // false check number or not
a = b = 0
typeof a // number
10>9>8 //  false
null == undefined// true both return false so it’s ture
null === undefined // false
null == Object // false
null === object // false
console.log(1 +  "2" + "2"); //"122" 
console.log(1 +  +"2" + "2"); //"32"
console.log(1 +  -"1" + "2"); //"02"
console.log(+"1" +  "1" + "2"); //"112"
console.log( "A" - "B" + "2"); //"NaN2"
console.log( "A" - "B" + 2); //NaN
console.log("0 || 1 = "+(0 || 1));  // 0 || 1 = 1
console.log("1 || 2 = "+(1 || 2)); // 1 || 2 = 1
console.log("0 && 1 = "+(0 && 1));  // 0 && 1 = 0
console.log("1 && 2 = "+(1 && 2)); //1 && 2 = 2
console.log(false == '0') // true
console.log(false === '0') // false
console.log(1 < 2 < 3); // true
console.log(3 > 2 > 1); // false
1 == "1"     // true
1 === "1"    // false
null == undefined // true
null === undefined // false
'0' == false // true
'0' === false // false
[]==[] or []===[] //false, refer different objects in memory
{}=={} or {}==={} //false, refer different objects in memory
