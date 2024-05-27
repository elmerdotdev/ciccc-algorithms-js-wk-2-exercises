/*
In this exercise, we will be converting a normal string into camelCase text.

Case Maker
We will receive a normal string of words separated with spaces as the input. Our job is to convert these strings into camel cased strings.

Instruction
Create a function named camelCase that will convert a string to camel case, and return the result.
*/

const camelCase = function (input) {
  // Split the input string into words
  const words = input.split(' ');

  // Transform the words into camel case
  const camelCased = words.map((word, index) => {
    if (index === 0) {
      return word.toLowerCase();
    }
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  });

  // Join the words back into a single string
  return camelCased.join('');
};

console.log(camelCase("this is a string")); // thisIsAString
console.log(camelCase("loopy cornerstone")); // loopyCornerstone
console.log(camelCase("supercalifragalisticexpialidocious")); // supercalifragalisticexpialidocious

module.exports = camelCase;
