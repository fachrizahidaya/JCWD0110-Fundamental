const str = "Javascript";
if (str === "Javascript") {
  console.log("Its javascript");
} else {
  console.log("not javascript");
}

console.log(str === "Javascript" ? "Its Javascript" : "Not Javascript");

let grade = "D";

console.log(
  grade === "A"
    ? "Excellent Result"
    : grade === "B"
    ? "Great Result"
    : grade === "C"
    ? "Average Result"
    : "Invalid Grade "
);
