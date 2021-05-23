const prompt = require("prompt-sync")({ sigint: true });

let n , i, flag;

flag = 1;
i = 2;

n = parseInt(prompt('Enter the n: '))

for( i = 1; i <= (n/2); i++){
    if(n%i == 0){
        flag = 0;
    }
}
if(flag == 0)