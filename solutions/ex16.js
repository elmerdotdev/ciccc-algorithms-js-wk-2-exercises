/*
Caze Maker II
We will still be given an input string to convert. However, this time, we'll also be given a casing style to work with. The following code block will describe all the casing styles to support. We may also receive an array of casing styles, and each of these should be applied.

Instruction
Create a function named makeCaze that will receive an input string and one or more casing options. Return a new string that is formatted based on casing options:

Precedence of each of the casing styles are as follows, values higher in the list should be processed first:

camel, pascal, snake, kebab, title
vowel, consonant
upper, lower
Our function should be able to handle all of these cases.
*/

const makeCaze = function (input, caze) {
  if (!Array.isArray(caze)) {
    caze = [caze];
  }

  const precedence = ['camel', 'pascal', 'snake', 'kebab', 'title', 'vowel', 'consonant', 'upper', 'lower'];
  caze.sort((a, b) => precedence.indexOf(a) - precedence.indexOf(b));

  for (let style of caze) {
    switch (style) {
      case 'camel':
        input = camelCase(input);
        break;
      case 'pascal':
        input = pascalCase(input);
        break;
      case 'snake':
        input = snakeCase(input);
        break;
      case 'kebab':
        input = kebabCase(input);
        break;
      case 'title':
        input = titleCase(input);
        break;
      case 'vowel':
        input = vowelCase(input);
        break;
      case 'consonant':
        input = consonantCase(input);
        break;
      case 'upper':
        input = input.toUpperCase();
        break;
      case 'lower':
        input = input.toLowerCase();
        break;
    }
  }

  return input;
};

const camelCase = function (str) {
  const words = str.split(' ');
  return words.map((word, index) => {
    if (index === 0) {
      return word.toLowerCase();
    } else {
      return word[0].toUpperCase() + word.slice(1).toLowerCase();
    }
  }).join('');
};

const pascalCase = function (str) {
  const words = str.split(' ');
  return words.map(word => {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  }).join('');
};

const snakeCase = function (str) {
  return str.split(' ').join('_').toLowerCase();
};

const kebabCase = function (str) {
  return str.split(' ').join('-').toLowerCase();
};

const titleCase = function (str) {
  const words = str.split(' ');
  return words.map(word => {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  }).join(' ');
};

const vowelCase = function (str) {
  const vowels = 'aeiou';
  return str.split('').map(char => {
    if (vowels.includes(char.toLowerCase())) {
      return char.toUpperCase();
    } else {
      return char.toLowerCase();
    }
  }).join('');
};

const consonantCase = function (str) {
  const vowels = 'aeiou';
  return str.split('').map(char => {
    if (!vowels.includes(char.toLowerCase())) {
      return char.toUpperCase();
    } else {
      return char.toLowerCase();
    }
  }).join('');
};

console.log(makeCaze("this is a string", "camel")); // thisIsAString
console.log(makeCaze("this is a string", "pascal")); // ThisIsAString
console.log(makeCaze("this is a string", "snake")); // this_is_a_string
console.log(makeCaze("this is a string", "kebab")); // this-is-a-string
console.log(makeCaze("this is a string", "title")); // This Is A String
console.log(makeCaze("this is a string", "vowel")); // thIs Is A strIng
console.log(makeCaze("this is a string", "consonant")); // THiS iS a STRiNG
console.log(makeCaze("this is a string", ["upper", "snake"])); // THIS_IS_A_STRING

module.exports = makeCaze;
