let arr = [];
let arr1 = new Array();
// console.log(arr);
// console.log(arr1);

let arr2 = ["A", "B", "C", "D"];
// access data in array
// console.log(arr2[1]);
// replace data in array
arr2[3] = "E";
// console.log(arr2);

// built-in
// join
let arr3 = ["A", "B", "C", "D"];
// console.log(arr3.join());
// pop
let arr4 = ["A", "B", "C", "D"];
// console.log(arr4.pop());
// console.log(arr4);

// push
let arr5 = ["A", "B", "C", "D"];
arr5.push("F");
// console.log(arr5);

// shift
let arr6 = [1, 2, 4, 5];
arr6.shift();
// console.log(arr6);

// unshift
let arr7 = [1, 2, 4, 5];
arr7.unshift(3, 6);
// console.log(arr7);
// console.log(arr7.length);

// slice
let arr8 = [1, 2, 4, 5, 6];
// console.log(arr8.slice(1, 4));

// sort
let arr9 = [5, 4, 6];
// console.log(arr9.sort((a, b) => a - b)); //ascending
// console.log(arr9.sort((a, b) => b - a)); // descending

// splice
const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
fruits.splice(0, 2, "Durian", "Salak");
// console.log(fruits);

// foreach
// let arr10 = [1, 2, 3, 4, 5];
// let b = arr10.forEach((item, index) => {
//   console.log(item);
// });
// console.log(b);

// // map
// let arr11 = [1, 2, 3, 4, 5];
// let a = arr11.map((item, index) => {
//   return item * 2;
// });

// console.log(a);

// for-of
let fruits1 = ["apple", "orange", "plum"];
for (let ayam of fruits1) {
  console.log(ayam);
}
