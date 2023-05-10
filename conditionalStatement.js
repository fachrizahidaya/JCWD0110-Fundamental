/*
Conditional statement
digunakan untuk pemilihan kondisi

*/

// if

/*
if (condition) { //true
 block code // jika true maka code block jalan
}

*/

let age = 17;
if (age >= 17) {
  console.log("Anda cukup umur");
}

let text = "Halo teman-teman semua";
if (text.length > 10) {
  console.log("Too much characters");
}

// if - else
/*
if (condition) { //true
 block code // jika true maka code block jalan, jika tidak memenuhi maka akan menjalankan else
} else {
    block code
}

*/

let age1 = 17;
if (age1 < 17) {
  console.log("Register Success");
} else {
  console.log("Register Failed");
}

// if - else if - else
/*
if (condition) { //true
 block code // jika true maka code block jalan, jika memenuhi maka akan menjalankan else if, jika tidak ada yang memenuhi maka akan menjalankan else
} else if {
    block code
} else {
    block code
}

*/
let score = 56;
if (score > 80) {
  console.log("Nilai Anda Bagus");
} else if (score > 60) {
  console.log("Nilai Anda Cukup");
} else {
  console.log("Nilai Anda Kurang");
}

let weight = 72;
if (weight >= 80) {
  console.log("Berat Badan berlebihan");
} else if (weight >= 70) {
  console.log("Berat badan cukup");
} else if (weight >= 60) {
  console.log("Berat Ideal");
} else {
  console.log("Berat badan kurang");
}

// ternary operator
age1 > 17 ? console.log("Register success") : console.log("Register failed");
score > 80
  ? console.log("Nilai Anda Bagus")
  : score > 60
  ? console.log("Nilai Anda Cukup")
  : console.log("Nilai Anda Kurang");
