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
let a = multipleInteger(5, 5, 10, 24, 3, 6, 7, 8);
console.log(a);
