// Write a JavaScript function that takes a string as input and returns the reverse of that string.
// For example, if the input is "Hello, World!", the function should return "!dlroW ,olleH".
// If the input is "JavaScript", the output must be "tpircSavaJ"

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const reverseString = (inputString) => {
  let reversedString = '';
  for( let i = inputString.length - 1; i >= 0; i-- ) {
    reversedString += inputString[i];
  }
  return reversedString;
}

rl.question('Enter a string: ', (input) => {

  const line = input.split(/\s+/); // Split the input string into an array of words
  const numberOfItems = line.length;
  
  let reversedString = '';

  for( let i = numberOfItems - 1; i >= 0 ; i-- ) {

    const word = line[i];
    const reversedWord = reverseString(word);
    reversedString += reversedWord + ' ';
  
  }

  console.log(reversedString);

  rl.close();
})