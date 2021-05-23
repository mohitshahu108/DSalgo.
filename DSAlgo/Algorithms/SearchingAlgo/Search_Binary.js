function SearchBinary(arr, val) {
  let left = 0;
  let rigth = arr.length - 1;
  let middle = Math.floor((left + rigth) / 2);
  while (arr[middle] !== val && left <= rigth) {
    if (val > arr[middle]) left = middle + 1;
    else rigth = middle - 1;
    middle = Math.floor((left + rigth) / 2);
  }
  return arr[middle] ? middle: -1;
}
console.log(SearchBinary([1, 3, 4, 6, 8, 9, 10, 15, 17, 19, 20], 17));
