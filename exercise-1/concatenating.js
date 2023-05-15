const concatAnd = (arr) => {
  let last = arr[arr.length - 1];
  arr.pop();
  //   console.log(`${arr.join(", ")}, and ${last}`);
  console.log(`${arr}`);
//   console.log(arr);
};
let a = ["apple", "banana", "kiwi", "melon", "guava", "mango"];
concatAnd(a);
