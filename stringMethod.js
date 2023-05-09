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
let message7 = "Hello World";
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

// concatenation
let sentence = "Hello" + " " + "World";
console.log(sentence);

let ex1 = "1" + 2;
console.log(ex1);
console.log(typeof ex1);
let ex2 = 2 + "1";
console.log(ex2);
console.log(typeof ex2);
let ex3 = 1 + 1 + "1";
console.log(ex3);
console.log(typeof ex3);

let ex4 = "1" + 1 + 1;
console.log(ex4);
console.log(typeof ex4);
