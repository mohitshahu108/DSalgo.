function SelectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      console.log(arr[j], arr[lowest]);
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    if (i !== lowest) {
      let temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
      console.log(arr);
    }
  }
  return arr;
}

console.log(SelectionSort([13, 45, 12, 43]));
