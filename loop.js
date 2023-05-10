// welcome to day 2

// for

// while
let start = 0;
while (start < 3) {
  console.log("hello, there");
  start++;
}
// do while
let angka = 1;
do {
  console.log("hey, you!");
  angka++;
} while (angka < 0);

// example
let phoneNumber = "081234095678";
for (let i = 0; i < phoneNumber.length; i++) {
  if (isNaN(phoneNumber[i]) === true) {
    console.log("Wrong input");
    break;
  }
}
