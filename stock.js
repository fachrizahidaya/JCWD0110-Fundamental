// cara 1
const maxProfit = (arr) => {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let k = arr[j] - arr[i];
      //   console.log(k);
      max = Math.max(max, k);
    }
  }
  return max;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
