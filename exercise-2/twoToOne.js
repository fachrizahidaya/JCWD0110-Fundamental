const combine = (arr1, ...manyArr) => {
  console.log(arr1.concat(...manyArr));
};
let a = ["hello", "there", "you"];
let b = ["world"];
let c = ["there"];
combine(a, b, c);
