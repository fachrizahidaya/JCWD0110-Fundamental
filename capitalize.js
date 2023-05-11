let str = "hello world";
let splitStr = str.toLowerCase().split(" ");
let result = "";

for (let i = 0; i < splitStr.length; i++) {
  splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  console.log(splitStr[i]);
}
console.log(splitStr.join(" "));
