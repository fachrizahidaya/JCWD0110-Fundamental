function lcm(num1, num2) {
  let lcmNum = num1 > num2 ? num1 : num2;
  let counter = num1 > num2 ? num1 : num2;
  do {
    if (lcmNum % num1 == 0 && lcmNum % num2 == 0) {
      return lcmNum;
    }
    lcmNum += counter;
  } while (lcmNum <= num1 * num2);
}

console.log(lcm(3, 13));
