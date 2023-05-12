function removeOdd(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    if (arr[i] % 2 == 0) {
      newArr.push(arr[i]);
      //   console.log(newArr);
    }
  }
  return newArr;
}
let res = removeOdd([1, 2, 3, 4, 5]);
console.log(res);
