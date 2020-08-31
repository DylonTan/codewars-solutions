// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby and Python)
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Divison should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));

function expression(operation, num) {
  if (!operation) return num;

  return operation(num);
}

function zero(operation) {
  return expression(operation, 0);
}

function one(operation) {
  return expression(operation, 1);
}

function two(operation) {
  return expression(operation, 2);
}

function three(operation) {
  return expression(operation, 3);
}

function four(operation) {
  return expression(operation, 4);
}

function five(operation) {
  return expression(operation, 5);
}

function six(operation) {
  return expression(operation, 6);
}

function seven(operation) {
  return expression(operation, 7);
}

function eight(operation) {
  return expression(operation, 8);
}

function nine(operation) {
  return expression(operation, 9);
}

function plus(num) {
  return function (operand) {
    return operand + num;
  };
}

function minus(num) {
  return function (operand) {
    return operand - num;
  };
}

function times(num) {
  return function (operand) {
    return operand * num;
  };
}

function dividedBy(num) {
  return function (operand) {
    return parseInt(operand / num);
  };
}
