const factorial = (x) => {
  if (x === 0) {
    return 1;
  } else {
    return x * factorial(x - 1);
  }
};
if (num >= 0) {
  let result = factorial(num);
  console.log(`factorial ${num} is ${result}`);
}

let num = 5;
factorial(num);
