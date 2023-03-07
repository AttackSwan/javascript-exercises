const fibonacci = function(n) {
    let num1 = 0;    //0, 1, 1, 2, 3, 5, 8...
    let num2 = 1;
    let output;
    
    //Validate n
    if (n<0) output = "OOPS";
    else if (n===0) output = 1;
    
    else{
        for(i=1; i<n; i++){
            let temp = num2;
            num2 = num1 + num2;
            num1 = temp;    
        }
        output = num2;
    }
    return output;
}

    //Initial approach - removed array to reduce memory usage
    // const fibArray = [1,1];

    // //Check input is valid (>0)
    // if (n < 0){ fibArray[n-1] = "OOPS"; }
    // else if(n === 0) fibArray[n-1] = 0;
    
    // else {
    //     for (i=2; i<n; i++){
    //         fibArray.push(fibArray[i-1] + fibArray[i-2]);
    //     }
    // }
    // // console.log(fibArray);
    // return fibArray[n-1];


// Do not edit below this line
module.exports = fibonacci;
