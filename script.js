var str = "get busy living or get busy dying.";
var result = str.split(" ").map(function(word, i) {
  return i % 2 == 0 ? word : word.split("").reverse().join(""); }).join(" ");

alert(result);