const prompt = require("prompt-sync")({ sigint: true });

let a, b, c;

a = parseInt(prompt("Enter value of a: "));
b = parseInt(prompt("Enter value of b: "));
c = parseInt(prompt("Enter value of c: "));

if (a > b) {
  if (a > c) {
    console.log("a is largest number");
  }
  else{
      console.log('c is largest number');
  }
}
else{
    if (b> c){
        console.log('b is the largest number');
    }
    else{
        console.log('c is the greatest number.');
    }
}
