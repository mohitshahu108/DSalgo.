function InsertionSort(arr) {
  for (var i = 1; i < arr.length; i++) {
    let toSort = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > toSort; j--) {
      console.log(j, i);
      console.log(arr[j], toSort);
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = toSort;
  }
  return arr;
}
console.log(InsertionSort([14, 13, 15, 17, 12]));

//* 14, 13, 15, 17, 12
//*
