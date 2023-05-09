let f = 20;
let g = 20;
let h = 10;
let i = "20";

let comp = f == g;
let comp1 = f === g;
let comp2 = f == i;
let comp3 = f === i;
let comp4 = f == h;
let comp5 = f === h;
// equal
console.log(comp);
console.log(comp1);
console.log(comp2);
console.log(comp3);
console.log(comp4);
console.log(comp5);
// not equal
let comp6 = f != g;
let comp7 = f != h;
console.log(comp6);
console.log(comp7);
console.log(f !== i);
// greater/equal than
console.log(f < i);
console.log(f > h);
console.log(f >= h);
console.log(f <= i);
