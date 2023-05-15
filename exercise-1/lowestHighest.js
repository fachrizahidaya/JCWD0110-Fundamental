// welcome
const findLowestHighest = (arr1) => {
  let lowest = 0;
  let highest = 0;
  let length = arr1.length;
  let sum = 0;

  arr1.sort((a, b) => a - b);
  lowest = arr1[0];
  highest = arr1[arr1.length - 1];

  for (let i = 0; i < length; i++) {
    sum += arr1[i];
  }
  console.log([lowest, highest, Math.round(sum / length)].join());
};

let a = [2, 3, 1, 6, 5, 7];
findLowestHighest(a);
