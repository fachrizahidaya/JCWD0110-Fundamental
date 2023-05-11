let str = "An apple a day keeps the doctors away";
let splitStr = str.toLowerCase().split("");
// console.log(splitStr);
for (let i = 0; i < splitStr.length; i++) {
  if (splitStr[i] == "a") {
    splitStr[i] = "*";
  }
}
console.log((str = splitStr.join("")));
