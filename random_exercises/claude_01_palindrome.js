// Exercise: Palindrome Checker
//
// A palindrome is a word or phrase that reads the same forwards and backwards.
// Examples: "racecar", "level", "madam"
//
// Write a function isPalindrome(str) that:
//   - ignores spaces, punctuation, and capitalization
//   - returns true if str is a palindrome, false otherwise
//
// Examples:
//   isPalindrome("racecar")         // true
//   isPalindrome("A man a plan a canal Panama") // true
//   isPalindrome("hello")           // false
//   isPalindrome("Was it a car or a cat I saw") // true

function isPalindrome(str) {
  const line = str.toLowerCase().replace(/[^\wÀ-ÿ]/g,"");
  const numberOfItems = line.length;
  let reversedString = '';

  for(let i = numberOfItems - 1 ; i >= 0 ; i-- ) {
    const word = line[i];
    reversedString += word;
  }
  if ( reversedString === line ) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome("racecar"));                          // true
console.log(isPalindrome("A man a plan a canal Panama"));      // true
console.log(isPalindrome("hello"));                            // false
console.log(isPalindrome("Was it a car or a cat I saw"));      // true
