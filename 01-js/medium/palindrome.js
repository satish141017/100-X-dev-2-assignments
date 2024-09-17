/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let i=0;
  let j=str.length-1;
  str=str.toLowerCase();
  while(i<j){
    while(i<j && !((str[i]>='a' && str[i]<='z') || (str[i]>='A' && str[i]<='Z'))){
      i++;

    }
    while(i<j && !((str[j]>='a' && str[j]<='z') || (str[j]>='A' && str[j]<='Z'))){
      j--;

    }
    if(str[i]!=str[j]) return false;
    i++;
    j--;
  }
  return true;
}
console.log(isPalindrome('openai'));
module.exports = isPalindrome;
