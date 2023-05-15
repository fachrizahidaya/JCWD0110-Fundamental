const addElement = (arr, str) => {
  let index = arr.indexOf(str);

  if (index === -1) {
    arr.push(str);
  }
  return arr;
};
let a = ["hello", "world", "there"];
let b = "hi";
let c = addElement(a, b);
console.log(c);
