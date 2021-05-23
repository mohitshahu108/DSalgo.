//helper function getDigit
function getDigits(num, index) {
  //   num = num.toString();
  //   return Number(num[num.length - 1 - index]);
  return Math.floor(Math.abs(num) / Math.pow(10, index)) % 10;
}

//console.log(getDigits(454, 2));

function digitCount(num) {
  //   num = num.toString();
  //   return num.length;
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num)) + 1);
}
// console.log(digitCount(544));

function mostDigits(nums) {
  //   let most = 0;
  //   nums.forEach((element) => {
  //     let currentMost = digitCount(element);
  //     if (currentMost > most) {
  //       most = currentMost;
  //     }
  //   });
  //   return most;
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}
// console.log(mostDigits([44, 555, 77757, 987]));

function RadixSort(nums) {
  let maxDigits = mostDigits(nums);
  for (let k = 0; k < maxDigits; k++) {
    let digitBucket = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigits(nums[i], k);
      digitBucket[digit].push(nums[i]);
    }
    nums = [].concat(...digitBucket); 
  }
  return nums;
}
console.log(RadixSort([44, 555, 77757, 987]));
 