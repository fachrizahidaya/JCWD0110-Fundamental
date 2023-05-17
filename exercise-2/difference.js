const findDifference = (arr1, arr2) => {
  let difference = [];
  for (let i = 0; i < arr1.length; i++) {
    if (!arr1.includes(arr2[i])) {
      difference.push(arr2[i]);
    }
  }
  for (let j = 0; j < arr2.length; j++) {
    if (!arr2.includes(arr1[j])) {
      difference.push(arr1[j]);
    }
  }
  return difference;
};
let a = ["hello", "world"]; // ["world", "there"]
let b = ["hello", "there"];
let c = findDifference(a, b);
console.log(c);
