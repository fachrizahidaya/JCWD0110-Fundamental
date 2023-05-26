// function sequence
let result;
function greet(str) {
  result = str;
}
function hello() {
  greet("hello");
}
function arigatou() {
  greet("arigatou");
}
arigatou();
hello();
console.log(result);

// first way sequence control
function calculator1(a, b) {
  return a + b;
}

function displayer1(number) {
  console.log(number);
}

let result1 = calculator1(5, 5);
displayer1(result1);

// second way
function calculator2(a, b) {
  let result2 = a + b;
  displayer2(result2);
}

function displayer2(number) {
  console.log(number);
}

calculator2(6, 6);

// indirect callback
function calculate(a, b, callback) {
  callback(a + b);
}
function display(sum) {
  console.log(sum);
}
calculate(5, 5, display);

// direct callback
function calculate1(a, b, callback) {
  callback(a + b);
}
calculate1(7, 7, function display(sum) {
  console.log(sum);
});

