const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(array) {
	return array.reduce((total, item) => total + item, 0);
};

const multiply = function(array) {
  return array.length ? array.reduce((total, current) => total * current) : 0;
}

const power = function(a,b) {
	return Math.pow(a,b);
};

const factorial = function(a) {
	let sum = 1;
  if (sum > 0){
    for(i=a; i>0; i--){
      sum *= i;
    }
  }
  return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
