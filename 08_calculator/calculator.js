const add = function(x, y) {
  return x + y;
	
};

const subtract = function(x, y) {
  return x - y;
	
};

const sum = function(x) {
  s = 0
  x.forEach(n => {
    s += n;
  });
  return s;
	
};

const multiply = function(x) {
  let s = 1;
  for (let i = 0; i < x.length; i++){
    s = s * x[i];
  }
  return s;
};

const power = function(x, y) {
  return x**y;
};

const factorial = function(x) {
	if (x == 0){
    return 1;
  }
  return x*factorial(x-1);
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

console.log(multiply([1,2,3,4]));