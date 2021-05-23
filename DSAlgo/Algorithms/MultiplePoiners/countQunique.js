/**
 * countUniqueValues
 * Implement a function called countUniqueValueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.
 */
/**
 * possible inputs:
 * input: 1,1,1,1,2
 * input: 1,2,3,4,4,4,4,5,12,12
 * input:
 * input: -2, -1, -1, 0, 1
 */

/*****MYSOLUTION******/

function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  let container1 = 0;
  let container2 = container1 + 1;
  let uniqueCounter = 1;

  while (container1 < arr.length) {
    if (arr[container1] !== arr[container2]) {
      uniqueCounter++;
    }
    container1++;
  }
  return uniqueCounter;
}

let logger = countUniqueValues([-2, -1, -1, 0, 1]);
console.log(logger);
