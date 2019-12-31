function addOne(x) {
    return x + 1;
}
function pipe(arg){
    let answer = arg;
    for(let i; i<arguments.length; i++){
        answer = arguments[i](answer);
    }
    return answer;
}
pipe(1, addOne);
