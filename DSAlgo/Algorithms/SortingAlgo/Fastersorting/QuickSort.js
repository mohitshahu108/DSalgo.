function pivot(arr, start, end) {
  let pivotElement = arr[start];
  let pivotindex = start;
  for (i = start + 1; i <= end; i++) {
    if (arr[i] < pivotElement) {
      pivotindex++;
      [arr[i], arr[pivotindex]] = [arr[pivotindex], arr[i]];
    }
  }
  [arr[start], arr[pivotindex]] = [arr[pivotindex], arr[start]];
  return pivotindex;
}
function QuickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotindex = pivot(arr, left, right);
    // left
    QuickSort(arr, left, pivotindex - 1);
    // right
    QuickSort(arr, pivotindex + 1, right);
  }
  return arr;
}
console.log(QuickSort([4, 3, 2, 6, 8, 1]));