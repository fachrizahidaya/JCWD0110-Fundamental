function recursiveFunc1(n) {
  if (n <= 0) {
    return 1;
  } else {
    return 1 + recursiveFunc1(n - 1);
  }
}

console.log(recursiveFunc1(1));

function recursiveFunc2(n) {
  //   console.log(n);
  if (n <= 0) return 1;
  else return 1 + recursiveFunc2(n - 5);
}
console.log(recursiveFunc2(1));
