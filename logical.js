let x = 6;
let y = "6";

if (x < 7 && y > 5) {
  console.log(true);
} else {
  console.log(false);
}

if (x < 7 || y > 5) {
  console.log(true);
} else {
  console.log(false);
}

if (x !== y) {
  console.log(true);
} else {
  console.log(false);
}

let car = "BMW";
if (car === "BMW" || car === "TOYOTA") {
  console.log("This car is aweseome");
}
