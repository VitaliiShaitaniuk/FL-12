function isLeapYear(input){
    let year = new Date(input).getFullYear();
    if (isNaN(year)) {
        return 'Invalid Date.';
    }
    if(year % 4 !==0 && year % 400 !== 0){
        return year + " is not a leap year";
    }else if(year % 100 !== 0){
        return year + " is a leap year";
    }else{
        return year + " is a leap year";
    }
}
isLeapYear('2020-01-01 00:00:00'); 
