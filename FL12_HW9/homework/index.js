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
function mapArray(array,func){
    let outputArr = [];
    for(let symbol of array){
        outputArr.push(parseInt(symbol));
    }
    executeforEach(outputArr,func);
    return outputArr;
}
function filterArray(array, func){
    let outputFiltArr = [];
    executeforEach(array, function(symbol){
        if(func(symbol) === true){
            outputFiltArr.push(symbol);
        }
    })
    return outputFiltArr;
}
function flipOver(str){
    let strOutput = '';
    for(let symbol of str){
        strOutput = symbol + strOutput;
    }
    return strOutput;
}
