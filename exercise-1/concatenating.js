const concatAnd = (arr) => {
  let last = arr[arr.length - 1];
  arr.pop();
  console.log(`${arr.join(", ")}, and ${last}`);
};
let a = ["apple", "banana", "kiwi", "melon", "guava", "mango"];
concatAnd(a);
