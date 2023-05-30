function sumTwoDimension(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      sum += arr[i][j];
    }
  }
  return sum;
}
let array = [
  [1, 2, 3],
  [3, 2, 1],
];
console.log(sumTwoDimension(array));
