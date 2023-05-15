const calculateArray = (arr1, arr2) => {
  let sumArray = [];
  for (let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
    sumArray.push((arr1[i] || 0) + (arr2[i] || 0));
  }
  return sumArray;
};
let a = [1, 2, 3];
let b = [3, 2, 1];
let c = calculateArray(a, b);
console.log(c);
