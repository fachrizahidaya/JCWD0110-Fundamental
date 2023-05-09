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

// math operation
let a = 5;
let b = 5;
let c = 27;
let res = a + b;
let res2 = a - b;
let res1 = a * b;
let res3 = a / b;
let res4 = a ** 2;
let res5 = c % 3;
let res6 = c % 9;
let res7 = c % 4;
console.log(res);
console.log(res2);
console.log(res1);
console.log(res3);
console.log(res4);
console.log(res5);
console.log(res6);
console.log(res7);

// unary
let x = 1;
x = -x;
console.log(x);

// binary
let y = 2;
let z = 3;
console.log(y + z);
console.log(y * z);
console.log(y - z);
console.log(y / z);
console.log(z % y);

// modify in place
let n = 2;
n += 5;
console.log(n);
n *= 2;
console.log(n);
n -= 2;
console.log(n);
n /= 2;
console.log(n);

// increment & decrement
let counter = 2;
counter++;
console.log(counter);
counter--;
console.log(counter);

// prefix postfix

// decrement
let preCounter = 2;
console.log(--preCounter);
let postCounter = 2;
console.log(postCounter--);

// increment
let preCounter1 = 2;
console.log(++preCounter);
let postCounter1 = 2;
console.log(postCounter--);
