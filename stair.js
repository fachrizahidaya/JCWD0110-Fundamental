// cara 1
function findStep(n) {
  if (n == 0) {
    return 1;
  } else if (n < 0) {
    return 0;
  } else {
    let nextNumber = n - 2;
    let nextNumber2 = n - 1;
    return findStep(nextNumber) + findStep(nextNumber2);
  }
}
let n = 5;
console.log(findStep(n));

// cara 2
function climbStairs(n) {
  let fibo = [1, 1];
  if (n === 1 || n === 2) {
    return n;
  }
  for (let i = 2; i <= n; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
    console.log(fibo[i]);
  }
  return fibo[n];
}
console.log(climbStairs(3));
