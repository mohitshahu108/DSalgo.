const prompt = require("prompt-sync")({ sigint: true });

let a , b, c, D, x1, x2, rp , ip;

a = parseInt(prompt('Enter the value of a: '))
b = parseInt(prompt('Enter the value of b: '))
c = parseInt(prompt('Enter the value of c: '))

D = (b**2) - 4*a*c;

if(D>=0){
    let r1 = ((-b)+Math.sqrt(D))/2*a;
    let r2 = ((-b)-Math.sqrt(D))/2*a;
    console.log(r1, "  " ,r2);
}
else{
    rp = (-b/2*a);
    ip =Math.sqrt((-D)/2*a)
    console.log(rp + ip, rp - ip);
}