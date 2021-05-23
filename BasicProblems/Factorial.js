const prompt = require("prompt-sync")({ sigint: true });


// iterative solution
// let n, factorial;
// n = parseInt(prompt('Enter the number: '))
// factorial =1;
// for(let i =1; i<=n; i++){
//     factorial = factorial * i;
// }

// Recursive solution
function factorial(n)
{
    if (n == 0)
        return 1;
    return n * factorial(n - 1);
}

console.log(factorial(5));
