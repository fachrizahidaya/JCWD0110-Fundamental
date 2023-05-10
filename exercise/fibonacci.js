let num = 5;
let x = 0;
let y = 1;
let z = 0;
for (let i = 1; i <= num; i++) {
  console.log(x);
  z = x + y;
  x = y;
  y = z;
}
