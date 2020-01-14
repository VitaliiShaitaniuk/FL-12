function convert(args){
    let output = [];
    for(let symbol of args){
        if(typeof symbol ==='number'){
            output.push(symbol.toString())
        }else if(typeof symbol==='string'){
            output.push(parseInt(symbol));
        }else {
            output.push(symbol);
        }
    }
    return output;
}
function executeforEach(array,func){
    for(let symbol of array){
        func(symbol);
    }
}
