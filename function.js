// function declaration
function square(n) {
  return n * n;
}
let x = square(4);
console.log(x);

// function expression
let sum = function (n) {
  return n + n;
};
let a = sum(4);
console.log(a);

// arrow function
let greeting = () => {
  console.log("hello");
};
greeting();

// example
let operational = (n) => {
  console.log(n * n);
  return n;
};

let y = operational(3);
console.log(y);

// scope
function salam() {
  let hello = "hello there";
  return hello;
}

console.log(hello);

// parameter & argument
function getMessage(name, name2, name3) {
  const hello = "Hello";
  return hello + " " + name + " dan " + name2;
}
console.log(getMessage("David", "Joko"));

// default parameter
let multiply = (a, b = 2) => {
  return a * b;
};
console.log(multiply(5));

// rest parameter
function myFunc(a, b, ...manyMore) {
  console.log("a:", a);
  console.log("b:", b);
  console.log("many more:", manyMore);
}

myFunc(1, 2, 3, 4, 5, 6, 7, 8);

// nested fuction
function getMessage1(firstName) {
  let message4 = "hi there";
  function sayHello() {
    let message3 = "hi there";
    // console.log(message4);
    return "Hello" + " " + firstName + ",";
  }

  function welcomeMessage() {
    return " Welcome to Purwadhika";
  }
  console.log(message4);
  return sayHello() + "" + welcomeMessage();
}

let message = getMessage1("David");
console.log(message);

// closure
let greeting1 = (name) => {
  let defaultMessage = "Hello";
  return function () {
    return defaultMessage + " " + name;
  };
};
let greetingDavid = greeting1("David");
console.log(greetingDavid());

// currying
function multiplier(num1) {
  return function (num2) {
    return num2 * num1;
  };
}
const mul3 = multiplier(3);
console.log(mul3(5));

// currying
let preCurrying = (n1, n2) => {
  return n2 - n1;
};
console.log(preCurrying(3, 5));
//
//
//
let postCurrying = (n1) => {
  return function (n2) {
    return n2 - n1;
  };
};
console.log(postCurrying(3)(5));

// recursive
function countDown(fromNumber) {
  console.log(fromNumber);
  let nextNumber = fromNumber - 1;
  if (nextNumber > 0) {
    countDown(nextNumber);
  }
}

countDown(3);

// predefined function

// isNaN()
let a1 = "55";
console.log(isNaN(a1));
// parseInt()
console.log(parseInt(a1));
console.log(typeof parseInt(a1));
