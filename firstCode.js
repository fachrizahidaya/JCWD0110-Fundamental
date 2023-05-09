// Coding hari pertama
console.log("Hello world"); // ini coding
/* 
ini sebuah 
comment 
*/
let message = "Hello";

// contoh let
let product = "shoes";
console.log(product);
product = "bag";
console.log(product);

// contoh const
const name = "Johnny";
console.log(name);
// name = "Jason";

// camel-case
let currentCity = "Yogya";

// penulisan variable tidak boleh sama, case-sensitive
let product1 = "car";
const Product1 = "car";
console.log(product1);

const message1 = "javascript";
const count = 123;
const bigNumber = 123456789012345678901234567890n;
const isTrue = true;
const noData = null;
let noAssigned;
const person = {
  name: "Joni",
  age: 26,
};

console.log(typeof message1);
console.log(typeof count);
console.log(typeof bigNumber);
console.log(typeof isTrue);
console.log(typeof noData);
console.log(typeof noAssigned);
console.log(typeof person);

// mutable
let name1 = "Rizal";
console.log(name1);
let newName = name1;
console.log(newName);

// immutable
let Person = {
  name: "Johnny",
  age: 26,
};
console.log(Person);

let newPerson = Person;
console.log(newPerson);

// string built-in method

// slice
let message2 = "Hello there";
let result = message2.slice(0, 3);
let result1 = message2.slice(3);
console.log(result);
console.log(result1);

// concat
let message3 = "Hello";
let message4 = "world";
let result2 = message3.concat(" ", message4);

// uppercase
let result3 = message4.toUpperCase();
console.log(result2);
console.log(result3);

// split
let message5 = "How are you?";
let result4 = message5.split("");
let result5 = message5.split(" ");
console.log(result4);
console.log(result5);

// indexOf
let message6 = "Hello world, welcome to the universe.";
let result6 = message6.indexOf("world");
let result7 = message6.indexOf("l");
let result8 = message6.indexOf("a");
let result9 = message6.indexOf("hello");
let result10 = message6.indexOf("l", 6);
console.log(result6);
console.log(result7);
console.log(result8);
console.log(result9);
console.log(result10);

// trim
let message7 = "       Hello World!        ";
let result11 = message7.trim();
console.log(`Hasil split-nya adalah ${result11}`);

// replace
let result12 = result11.replace(/^\s+|\s+$/gm, "");
console.log(result12);

// template literal
const name2 = "David";
const message8 = `Welcome, ${name2}`;
console.log(message8);
console.log(`My name is ${name2}`);

// number built-in
let number1 = 1;
console.log(typeof number1);
let text = number1.toString();
console.log(text);
console.log(typeof text);

let number2 = 123.456;
console.log(typeof number2);
let exp = number2.toExponential();
console.log(exp);
console.log(typeof exp);

let string1 = "123";
let string2 = "100.2";
let num1 = parseInt(string1);
let num2 = parseFloat(string2);
console.log(num1);
console.log(typeof num1);
let num3 = Math.floor(num2);
let num4 = Math.ceil(num2);
console.log(num2);
console.log(num3);
console.log(num4);

// type conversion
let str1 = String(123);
console.log(str1);
console.log(typeof str1);
const num = "3" * 4;
console.log(num);
let str2 = Number("3.14");
console.log(str2);
console.log(typeof str2);
let boo1 = Boolean(1);
let boo2 = Boolean(0);
let boo3 = Boolean("Hello ");
let boo4 = Boolean("");
console.log(boo1);
console.log(boo2);
console.log(boo3);
console.log(boo4);

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
