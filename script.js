function palindrome(str) {
    var re = /[\W_]/g;
    var lowRegStr = str.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join(''); 
    alert(reverseStr === lowRegStr);
    return reverseStr === lowRegStr;
  }
  palindrome("A man, a plan, a canal. Panama");