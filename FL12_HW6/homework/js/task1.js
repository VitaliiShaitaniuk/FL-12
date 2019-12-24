let a = parseInt(prompt('input "a" value'));
let b = parseInt(prompt('input "b" value'));
let c = parseInt(prompt('input "c" value'));
let four = 4;
let two = 2;

if (a === 0 || b === 0 || c === 0 || isNaN(a) || isNaN(b) || isNaN(c)){
    alert('Invalid input data');
    console.log('Invalid input data');
}
let discr = b*b - four*a*c;


if(discr < 0){
    console.log(' no solution ')
}else if(discr>0){
    let sqrt_discr = Math.sqrt(discr);
    let x1 = (-b + sqrt_discr) / (two * a);
    let x2 = (-b - sqrt_discr) / (two * a);
    console.log(' x1 = '+ x1 + ' x2 = '+ x2);
    
}else if(discr === 0){
    let x1= -b/(two * a);
    console.log(' x1 = x2 = '+ x1);
    
}
console.log(' Discriminant = ' + discr);
