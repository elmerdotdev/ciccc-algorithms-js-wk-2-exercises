/*
In this exercise, we will be counting the number of vowels that appear in a given string. 
For this exercise, consider the following to be vowels: a, e, i, o, and u.

Instruction
Create a function named numberOfVowels that will receive a string and return the number of vowels in that string.
*/

const numberOfVowels = function (data) {
  // Define a set of vowels
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  // Split the string into an array of characters and filter out the vowels
  const vowelsOnly = data.split('').filter(char => vowels.includes(char));
  console.log(vowelsOnly)

  return vowelsOnly.length;
};

console.log(numberOfVowels("orange")); // 3
console.log(numberOfVowels("cornerstone college")); // 7
console.log(numberOfVowels("aeiou")); // 5

module.exports = numberOfVowels;
