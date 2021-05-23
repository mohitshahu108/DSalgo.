function factorial(num) {
  if (num === 1 || num === 0) return 1;
  return num * factorial(num - 1);
}

let logger = factorial(5)
console.log(logger);
