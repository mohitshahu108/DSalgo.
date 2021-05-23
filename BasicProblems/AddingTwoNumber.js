const prompt = require("prompt-sync")({ sigint: true });

let num1, num2, sum;

num1 = parseInt(prompt("Enter num1: "));
num2 = parseInt(prompt("Enter num2: "));

sum = num1 + num2;

console.log(sum);
