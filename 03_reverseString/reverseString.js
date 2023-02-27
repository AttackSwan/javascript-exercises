const reverseString = function(inputString) {
    let reversedInput = '';
    
    //loop through string backwards and add char to new string
    for(i=inputString.length - 1; i>=0; i--){
        reversedInput += inputString[i];
    }
    return reversedInput;
};

// Do not edit below this line
module.exports = reverseString;


/* FOR LOOP METHOD 
    //get string length
    const stringLength = inputString.length;
    let reversedInput = '';
    //for loop
    for(i=stringLength; i>=0; i--){
        //add letters to reversed string
        reversedInput += inputString.charAt(i);
    }
    //return reverse string
    return reversedInput;
    */



    /* CONVERT TO ARRAY METHOD
        //Split string into an array
    let array_input = inputString.split('');
    //Reverse the array
    let array_reversedInput = array_input.reverse();
    //Join array back into string
    let str_reversedInput = array_reversedInput.join('');

    return str_reversedInput;
    */