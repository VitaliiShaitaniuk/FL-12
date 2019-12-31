function makeNumber(str){
    var symbol = str.match(/\d/g);
    symbol = symbol.join("");
            return symbol;
}
function countNumbers(str){
    let symbolsStr = makeNumber(str);
    let answer = {};
    for (let symbol of symbolsStr){
        if(!(symbol in answer)) {
            answer[symbol] = 1;
        }else{
            answer[symbol] += 1;
        }
    }
    return answer;
}
countNumbers('df45gt676g');
makeNumber('df45gt676g');
