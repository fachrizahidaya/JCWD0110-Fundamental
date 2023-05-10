// for
for (let i = 0; i < 3; i++) {
  // i=0 < 3 ? true, i=1 < 3 ? true, i=2 < 3 ? true, i=3 < 3 ? false
  console.log("Hello world");
}

// while
let j = 0;
while (j < 3) {
  console.log("Hello there");
  j++;
}

// do-while --> dilakukan satu kali dahulu, baru mengikuti sesuai kondisi
let i = 0;
do {
  console.log("Hi there");
  i++;
} while (i < 5);

// break
let sum = 2;
while (true) {
  //   let value = 1;
  if (sum === 5) break;
  //   sum += value;
  sum++;
  console.log(`Sum: ${sum}`);
}

// continue
for (let i = 0; i < 5; i++) {
  //   console.log(i);
  if (i === 3) continue;
  console.log(i);
}

// example
let phoneNumber = "081234095678";
for (let i = 0; i < phoneNumber.length; i++) {
  if (isNaN(phoneNumber[i]) === true) {
    console.log("Wrong input");
    break;
  }
}

// let phoneNumber = "081b2340a956c78";
// let counter = 0;
// for (let i = 0; i < phoneNumber.length; i++) {
//   //   console.log(phoneNumber[i]);
//   //   console.log(isNaN(phoneNumber[i]));
//   counter += isNaN(phoneNumber[i]);

//   console.log(counter);
//   if (isNaN(phoneNumber[i]) === true && counter) {
//     console.log("Input invalid");
//     break;
//   }
// }
