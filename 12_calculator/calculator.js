const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((a, b) => a + b, 0);
};

const multiply = function(arr) {
  return arr.reduce((a, b) => a * b, 1);
};

const power = function(a, b) {
  let result = a;
	for (let i = 1; i < b; i++){
    result = result * a;
  }
  return result;
};

const factorial = function(a) {
	let result = a;
  if (a == 0) return 1;
  while(a > 1) {
    a = a - 1;
    result = result * a;
  }
  return result;
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
