// Constant time / O(1)
// Banyaknya input tidak akan memengaruhi waktu proses coding
let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const getFirst = (input) => {
  return input[0];
};

// console.log(getFirst(myArray));

// Linear time / O(n)
// Banyaknya input akan berbanding lurus dengan waktu proses coding --> single loop

let newArray = [1, 2, 3, 4];

const getMax = (input) => {
  let max = 0;
  for (let i = 0; i < input.length; i++) {
    console.log(input[i]);
    // if (max < input[i]) {
    //   max = input[i];
    // }
  }
  //   return max;
};

// getMax(newArray);

// Square 2 time
// Bisa terjadi karena menjalankan proses linear di dalam linear (n2)
let myArr = [1, 5, 0];
const sort = (input) => {
  let sortedArray = [];
  for (let i = 0; i < input.length; i++) {
    let min = input[i];
    for (let j = i + 1; i < input.length; i++) {
      if (input[i] > input[j]) min = input[j];
    }
    sortedArray.push(min);
  }
  return sortedArray;
};

console.log(sort(myArr));

[2, 1, 4, 5, 7, 8, 9, 3];
// cari 2