let statement = "Convert Celcius to Fahrenheit";
console.log(statement);
let celcius = 60;
let fahrenheit = celcius * 1.8 + 32;
console.log(
  `${celcius} degree celcius is equal to ${fahrenheit} degree fahrenheit.`
);

// loop
// for

for (let i = 33; i < 40; i++) {
  console.log(`Suhu ${i} derajat Celcius setara dengan ${(i * 9) / 5 + 32} `);
}
// while

let celcius1 = 33;
let fahrenheit1 = 0;
while (celcius1 < 40) {
  console.log((fahrenheit1 = (celcius1 * 9) / 5 + 32));
  celcius1++;
}
