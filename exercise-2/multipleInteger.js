const multipleInteger = (maxSize, ...manyNum) => {
  let arr = [];
  for (let i = 0; i < manyNum.length; i++) {
    arr.push(manyNum[i]);
    if (arr.length === maxSize) {
      break;
    }
  }
  return arr;
};
let a = multipleInteger(5, 1, 2, 3, 4, 5, 6, 7, 8, 9);
console.log(a);
