const halfArray = (arr) => {
  arr.length % 2 === 0
    ? console.log(arr.slice(0, arr.length / 2))
    : console.log(arr.slice(0, arr.length / 2 + 0.5));
};

let array = [1, 2, 3, 4, 5, 6, 7];
halfArray(array);
