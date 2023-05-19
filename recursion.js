const factorial = (n) => {
  if (n <= 0) {
    return 1;
  } else {
    let nextNumber = n - 1;
    return n * factorial(nextNumber);
  }
};

let num = 4; // 3 * 2 * 1
console.log(factorial(num));

// ternary operator

const factorial2 = (n) => {
  return n <= 0 ? 1 : n * factorial(n - 1);
};

console.log(factorial2(num));
