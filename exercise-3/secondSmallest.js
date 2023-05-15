const findSecondSmallest = (arr) => {
  arr.sort((a, b) => a - b);
  console.log(arr[1]);
};
let a = [1, 3, 4, 2, 5]; // [1,2,3,4,5]
findSecondSmallest(a);
