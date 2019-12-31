function getMin(){
    var i;
    var min= 0;
    for(i = 0; i <arguments.length; i++){
        if(arguments[i] < min){
            min = arguments[i];
        }
    }
    return min;
}
getMin(3,0,-3);
