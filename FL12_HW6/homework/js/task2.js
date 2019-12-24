let side_a = parseInt(prompt('input first value of triangle'));
let side_b = parseInt(prompt('input second value of triangle'));
let side_c = parseInt(prompt('input third value of the triangle'));

if (isNaN(side_a) || isNaN(side_b) || isNaN(side_c)){
    alert('input values should be ONLY numbers ');
    console.log('input values should be ONLY numbers ');
}else if (side_a === 0 || side_b === 0 || side_c === 0){
    alert(' A triangle must have 3 sides with a positive definite length ');
    console.log(' A triangle must have 3 sides with a positive definite length '); 
}

let two = 2;
let p = (side_a + side_b + side_c)/two;
let square = Math.sqrt(p*(p-side_a)*(p-side_b)*(p-side_c));

if(square < 0 || square === 0){
    alert('Triangle doesn’t exist');
    console.log('Triangle doesn’t exist');
    console.log(square);
}else if(side_a === side_b && side_b === side_c){
    alert('Equilateral triangle');
    console.log('Equilateral triangle');
}else if(side_a === side_b && side_b !== side_c){
    alert('Isosceles triangle');
    console.log('Isosceles triangle');
}else if( side_b === side_c && side_c!== side_a){
    alert('Isosceles triangle');
    console.log('Isosceles triangle');
}else if(side_a !== side_b && side_c !== side_a){
    alert('Scalene triangle');
    console.log('Scalene triangle');
}else{
    alert('Triangle doesn’t exist');
    console.log('Triangle doesn’t exist');
}

