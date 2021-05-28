// Calculating with functions

// Passing a callback function into the number functions
// If there is a callback function we want to call the function and pass the number as a parameter, eg callback(1)
// If there the callback function is not being called then we just want to pass a number, eg 1

const zero = callback => {
  return callback ? callback(0) : 0;
};

const one = callback => {
  return callback ? callback(1) : 1;
};

const two = callback => {
  return callback ? callback(2) : 2;
};

const three = callback => {
  return callback ? callback(3) : 3;
};

const four = callback => {
  return callback ? callback(4) : 4;
};

const five = callback => {
  return callback ? callback(5) : 5;
};

const six = callback => {
  return callback ? callback(6) : 6;
};

const seven = callback => {
  return callback ? callback(7) : 7;
};

const eight = callback => {
  return callback ? callback(8) : 8;
};

const nine = callback => {
  return callback ? callback(9) : 9;
};

// Callback functions
// The callback function will pass a parameter that will the second number
// We then create a nested function and call the first number that is actually a callback function
// Then we perform the operation and use Math.floor() method to round it down to the nearest whole value

function plus(secondNumber) {
  console.log('secondNumber is equal to:', secondNumber)
  
  return function (firstNumber) {  
    console.log('firstNumber is equal to:', firstNumber)
    
    return Math.floor(firstNumber + secondNumber);
  };
};

function minus(secondNumber) {
  return function (firstNumber) {
    return Math.floor(firstNumber - secondNumber);
  };
};

function times(secondNumber) {
  return function (firstNumber) {
    return Math.floor(firstNumber * secondNumber);
  };
};

function dividedBy(secondNumber) {
  return function (firstNumber) {
    return Math.floor(firstNumber / secondNumber);
  };
};