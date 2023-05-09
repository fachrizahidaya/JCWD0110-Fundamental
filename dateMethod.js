// date data type
let now = new Date();
console.log(now);
let jan01 = new Date(0);
console.log(jan01);
let jan02 = new Date(24 * 3600 * 1000);
console.log(jan02);
let date = new Date("1969-01-26");
console.log(date);

// date built-n
let d = new Date().getFullYear();
let d1 = new Date().getMonth();
let d2 = new Date().getDate();
let d3 = new Date().getDay();
let d4 = new Date().getHours();
let d5 = new Date().getMinutes();
let d6 = new Date().getSeconds();
console.log(d);
console.log(d1);
console.log(d2);
console.log(d3);
console.log(d4);
console.log(d5);
console.log(d6);

let s = new Date();
s.setFullYear(2022, 11, 03);
console.log(s);
let s1 = new Date();
s1.setDate(02);
console.log(s1);
