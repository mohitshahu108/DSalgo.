/**
 * Write a function called sumZero which accepts a sorted array of integers.
 * The function should find the first pair where the sum is 0. Return an array that includes both
 * values that sum to zero or undefined if a pair does not exits
 */

/**
 *
 * let us think about possible inputs
 *  input : -6, -4,  -2, -1, 1, 2, 3
 *  input : -3, -2, -1, 0, 1, 2, 3
 */

// function sumZero(arr) {
//   // create array of pairs
//   // iterate the array twice from front and back
//   //
//   //return array of pairs
/**My solution */
//   let zerosumarray = [];
//   let i, j;
//   for (i = 0; i <= arr.length; ++i) {
//     for (j = arr.length; j >= 0; --j) {
//       let sum = arr[i] + arr[j];
//       if (sum === 0) {
//         zerosumarray.push(arr[i]);
//         zerosumarray.push(arr[j]);

//         return zerosumarray;
//       }
//     }
//   }

//   return undefined;
// }


/*Mentors solution */
function sumZero(arr){
  let left = 0 
  let right = arr.length -1;
  while(left < right){
    let sum = arr[left]+ arr[right]
    if(sum === 0){
      return [ arr[left], arr[right]]
    }else if(sum > 0){
      rigth--;
    }else{
      left++;  
    }
  }
}

let logger = sumZero([-6, -4, -2, -1, 1, 2, 3]);
console.log(logger);
