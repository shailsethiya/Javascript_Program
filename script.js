let n = 3; // height of pattern
let string = '';
// External loop
for (let i = 1; i <= n; i++) {
  // Internal loop
  for (let j = 1; j <= i; j++) {
    string += j*j;
  }
	string += "\n";
}
console.log(string);

Output -
1
1 4
1 4 9
