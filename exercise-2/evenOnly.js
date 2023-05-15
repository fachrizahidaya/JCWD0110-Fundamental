const findEven = (arr1) => {
  let arr = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr1.indexOf(arr1[i]) === i && arr.indexOf(arr1[i]) === -1) {
      arr.push(arr1[i]);
    }
    arr.sort((a, b) => a - b);
  }
  console.log(arr.filter((item) => item % 2 === 0));
};
let a = [1, 2, 3, 4, 3, 4, 2, 6];
findEven(a);
// console.log(b);
