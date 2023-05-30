function gcd(num1, num2) {
  let factorNum1 = [];
  let factorNum2 = [];
  let intersection = [];

  let i = 1;
  while (i <= num1) {
    if (num1 % i === 0) {
      factorNum1.push(i);
    }
    i++;
  }

  let j = 1;
  while (j <= num2) {
    if (num2 % j === 0) {
      factorNum2.push(j);
    }
    j++;
  }

  factorNum1.map((item) => {
    if (factorNum2.includes(item)) {
      intersection.push(item);
    }
  });
  //   console.log(factorNum1);
  //   console.log(factorNum2);
  console.log(intersection);
  return Math.max(...intersection);
}

console.log(gcd(28, 56));
