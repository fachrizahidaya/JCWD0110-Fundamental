let word = "Race car";
let reverse = "";
let joined = word.replace(/ /g, "");
let lowCase = joined.toLowerCase();
console.log(joined);
console.log(lowCase);

for (let i = lowCase.length - 1; i >= 0; i--) {
  //   console.log(i);
  reverse += lowCase[i];
  //   console.log(reverse);
}
if (lowCase === reverse) {
    console.log("palindrome");
} else {
    console.log("not palindrome");
}
