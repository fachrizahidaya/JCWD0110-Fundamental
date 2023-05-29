const evenAndOdd = (number) => {
  let arr = [];
  for (let i = 0; i < number; i++) {
    if (i % 2 === 0) {
      return "even number";
    } else {
      return "odd number";
    }
  }
};

const findEven = (number) => {
  let i = 0;
  let arr = [];
  while (i < number) {
    if (i % 2 === 0) {
      arr.push(i);
    }
    i++;
  }
  return arr;
};

function factorial(number) {
  let result = 1;
  for (let i = 1; i <= number; i++) {
    result *= i;
  }
  return result;
}

const fibonacci = (number) => {
  return {
    findFibo() {
      let x = 0;
      let y = 1;
      let z = 0;
      let arr = [];
      for (let i = 1; i <= number; i++) {
        arr.push(x);
        z = x + y;
        x = y;
        y = z;
      }
      return arr;
    },
  };
};

module.exports = { evenAndOdd, findEven, factorial, fibonacci };
