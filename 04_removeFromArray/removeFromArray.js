const removeFromArray = function(inputArray, ...argRest) {
    let newArray = [];

    //For each element in the input array,
    //Check to see if it's in argRest (to be removed)
    //If it isn't, push it into newArray (to return)

    inputArray.forEach(checkArgs);
        
    function checkArgs(element){
        if (!argRest.includes(element)){
            newArray.push(element);
        }
    }
    return newArray;
}

// Do not edit below this line
module.exports = removeFromArray;
