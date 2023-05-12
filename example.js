// cara 1
function findMax(arr) {
  let maxValue = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxValue) {
      maxValue = arr[i];
    }
  }
  return maxValue;
}
let result = findMax([10, 55, 79, 32]);
console.log(result);

// cara 2
function max(array) {
  console.log(array.sort((a, b) => a - b));
}
max([10, 7, 9, 8]);
