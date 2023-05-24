function titleToNumber(s) {
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    result *= 26;
    result += s[i].charCodeAt(0) - "A".charCodeAt(0) + 1;
  }
  return result;
}

console.log(titleToNumber("AZ"));

// angka ke columnName
function printString(columnNumber) {
  let columnName = [];

  while (columnNumber > 0) {
    let rem = columnNumber % 26;
    if (rem == 0) {
      columnName.push("Z");
      columnNumber = Math.floor(columnNumber / 26) - 1;
    } else {
      columnName.push(String.fromCharCode(rem - 1 + "A".charCodeAt(0)));
      columnNumber = Math.floor(columnNumber / 26);
    }
  }
  return columnName.reverse().join("");
}
console.log(printString(27));
