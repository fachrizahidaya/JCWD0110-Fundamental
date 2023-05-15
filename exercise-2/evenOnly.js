const findEven = (arr1) => {
  let arr = [];
  for (let i = 0; i < arr1.length; i++) {
    // console.log(arr1[i]);
    if (arr1.indexOf(arr1[i]) === i && arr.indexOf(arr1[i]) === -1) {
      console.log(arr1.indexOf(arr1[i]));
      //   console.log(arr.indexOf(arr1[i]));
      //   console.log(arr1.indexOf(arr1[i]) === i);
      //   console.log(arr.indexOf(arr1[i]) === -1);
      arr.push(arr1[i]);
    }
  }
  console.log(arr.filter((item) => item % 2 === 0));
};
let a = [1, 2, 2, 4, 4, 5];
// console.log(a.indexOf(4));
findEven(a);
// console.log(b);
