/*
We'll be adding only the numbers in the array which match the given condition.

Instruction
Create a function named conditionalSum that will be given an array of numbers and a condition, in this case odd or even. Given this condition, add up only the values which match that condition. If no values match the condition, return 0.
*/

const conditionalSum = function (values, condition) {
  // Filter the values based on the given condition
  const filteredValues = values.filter(value => {
    if (condition === "even") {
      return value % 2 === 0;
    } else if (condition === "odd") {
      return value % 2 !== 0;
    }
  });

  // Use reduce to sum up the filtered values
  const sum = filteredValues.reduce((acc, curr) => acc + curr, 0);

  return sum;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even")); // 6
console.log(conditionalSum([1, 2, 3, 4, 5], "odd")); // 9
console.log(conditionalSum([13, 88, 12, 44, 99], "even")); // 144
console.log(conditionalSum([], "odd")); // 0

module.exports = conditionalSum;
