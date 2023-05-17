const sumDuplicate = (arr) => {
  let duplicate = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) !== i && duplicate.indexOf(arr[i]) === -1) {
      duplicate.push(arr[i]);
    }
  }
  return duplicate.reduce((a, b) => a + b); // [1,3,4]
};

let arr1 = [1, 1, 3, 3, 4, 4];
let b = sumDuplicate(arr1);
console.log(b);
