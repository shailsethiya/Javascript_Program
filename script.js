function reverseWord(str) {
console.log(str.split(' ').map((str) => str.split('').reverse().join('')).join(' '));
}

reverseWord("Hello World");