const repeatString = function(string, num) {
    let returnString = '';
    
    //Check for negative repeats
    if (num < 0){
        returnString = "ERROR"
    }
    else{
        for(let i=0; i<num; i++){
            returnString += string;
        }
    }
    return returnString;
};

// Do not edit below this line
module.exports = repeatString;
