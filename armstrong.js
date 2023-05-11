let number = 1634;
let count = 0;
let a = number.toString().length;

for (let i = 0; i < a; i++) {
  //   console.log(number.toString()[i]);
  //   count += number.toString()[i] ** a;
  count += Math.pow(number.toString()[i], a);
    console.log(count);
}

if (count == number) {
  console.log("armstrong");
} else {
  console.log("not armstrong");
}
