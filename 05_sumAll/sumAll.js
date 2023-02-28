const sumAll = function(...args) {
    let sum = 0;
    
    if(argsValid(args)){
        args.sort();
        for (i = args[0]; i <= args[1]; i++){
            sum += i;
        }
        return sum;
    }
    else{
        return 'ERROR';
    }

    function argsValid(args){
        if(args.length > 2){
            return false;
        }
        else if (args[0]<0 || args[1]<0){
            return false;
        }
        else if (!(Number.isInteger(args[0]) && Number.isInteger(args[1]))){
            return false;
        }
        else {
            return true;
        }
    }
}

// Do not edit below this line
module.exports = sumAll;
