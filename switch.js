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

const score = 75;
switch (true) {
  case score > 80:
    console.log("bagus");
    break;
  case score > 70:
    console.log("cukup");
    break;
  default:
    console.log("invalid");
}
