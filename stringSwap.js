let str = "The QuiCk BrOwN Fox";
let splitStr = str.split("");

for (let i = 0; i < splitStr.length; i++) {
  //   console.log(splitStr[i]);
  //   console.log(splitStr[i].toUpperCase());
  if (splitStr[i] === splitStr[i].toUpperCase()) {
    splitStr[i] = splitStr[i].toLowerCase();
  } else {
    splitStr[i] = splitStr[i].toUpperCase();
  }
}
str = splitStr.join("");
console.log(str);
