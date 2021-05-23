/**
 * Write a fucntion called same, which concept two arrays.
 * The funcion should return true if every value in the
 * array has it's corresponding value squared in the second array.
 * The frequency of value must be the same.
 */

/**
 *  possible inputs
 *  arr1: 1 2 3 4 5
 *  arr2: 1 4 9 16 25
 *  return true.
 *
 *  arr1: 1 2 3
 *  arr2: 4 1 9
 *
 *  return true
 */

let arr1 = [1, 2, 3];
let arr2 = [4, 1, 9];
function same(arr1, arr2) {
  if (arr1 == null || arr2 == null) return false;
  if (arr1.length !== arr2.length) return false;
  // compare the lenght of both array if that is same proseed next
  let sarr1 = arr1.map((x) => Math.pow(x, 2));
  // now sort both array
  sarr1 = sarr1.sort();
  arr2 = arr2.sort();

  // if equal then return ture otherwise false
  if (arraysEqual(sarr1, arr2)) {
    return true;
  } else {
    return false;
  }
}

function arraysEqual(a, b) {
  // compair each element for equality
  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

console.log(same(arr1, arr2));
