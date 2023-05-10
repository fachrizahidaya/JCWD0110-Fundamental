/*
if (condition) { //jika condition true/sesuai
    block code //makan code berjalan
}
*/

let age = 17;
if (age > 17) {
  console.log("Register success");
} else {
  console.log("Register failed");
}

let grade = "D";
if (grade === "A") {
  console.log("Excellent Result");
} else if (grade === "B") {
  console.log("Great Result");
} else if (grade === "C") {
  console.log("Average Result");
} else {
  console.log("Invalid Grade");
}

console.log(
  grade === "A"
    ? "Excellent Result"
    : grade === "B"
    ? "Great Result"
    : grade === "C"
    ? "Average Result"
    : "Invalid Grade "
);

let score = 75;
if (score > 80) {
  console.log("Nilai Anda Bagus");
} else if (score > 60) {
  console.log("Nilai Anda Cukup");
} else {
  console.log("Nilai Anda Kurang");
}

let weight = 72;
if (weight >= 80) {
  console.log("Berat badan berlebihan");
} else if (weight >= 70) {
  console.log("Berat badan cukup");
} else if (weight >= 60) {
  console.log("Berat badan ideal");
} else {
  console.log("Berat badan kurang");
}

// switch - case
const product = "Papaya";
switch (product) {
  case "Orange":
    console.log("$1 per kg");
    break;
  case "Salak":
    console.log("$2 per kg");
    break;
  case "Mangoes":
  case "Papaya":
    console.log("Mango and Papaya are $3 per kg");
    break;
  default:
    console.log(`Product not available for ${product}`);
}

// comparison operator
let age1 = 18;
if (age1 != 18) {
  console.log(`Cannot create driving license`);
} else {
  console.log(`Valid to create driving license`);
}
