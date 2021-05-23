/*
 * write a function called maxSubaaraySum which accepts an
 * array of integers and a number called n. The function should
 * calculate the maximum sum of n consecutive elements in the
 * array.
 */

/*
 * possible inputs
 * input: [[1, 2, 5, 2, 8, 1, 5], 2] 10
 * input: [[1, 2, 5, 2, 8, 1, 5], 4] 17
 * input: [[], 4] null
 */
//***mys solution */

/**
function maxSubaaraySum(arr) {
  //do something
  //get the number of query made
  let numElementSubArr = arr[arr.length - 1];
  let array = arr[0];
  let subArr = [];
  let indexer = 0;
  let index = 0;
  let maxSum = 0;
  while (array.length > indexer) {
    for (let i = index; i <= index + (numElementSubArr - 1); i++) {
      subArr.push(array[i]);
    }
    let sum = 0;
    for (let element of subArr) {
      sum += element;
      if (sum > maxSum) {
        maxSum = sum;
      }
    }
    subArr = [];
    index++;
    if (index === array.length - 1) break;
    indexer++;
  }
  // grab the array to solve
  //create sub arr
  // run thorught the array for length of query
  // sum them and store it in varible sum
  // then again run thorugh the array but start from next index find sum store it in sum
  // check whether the sum is greater then previous one if it is then store it in maxSum
  // repeat the step untill array over
  // return maxSum
  return maxSum;
}
 */

//*Mentors solution naive*/
/*
function maxSubaaraySum(arr, num) {
  if (num > arr.lenght) {
    return null;
  }
  var max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    let temp = 0;
    for (let j = 0; j < num; j++) {
      console.log(temp);
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
    console.log(temp, max);
  }
  return max;
}
*/
//* now mentors solution refactored */

function maxSubaaraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
}

let logger = maxSubaaraySum([1, 2, 5, 2, 8, 1, 5], 4);
console.log(logger);
