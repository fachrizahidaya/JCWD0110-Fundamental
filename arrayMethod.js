// forEach --> looping array tapi tidak mereturn array baru
let names = ["alex", "lexi", "cross"];
let a = names.forEach((item, index) => {
  console.log(item);
});

// Map --> looping array return sebuah array baru
let b = names.map((item, index) => {
  return index;
});
console.log(b);

// case lain
let number = [1, 2, 3, 4, 5];
let arr = [];
let evenNum = number.map((item) => {
  if (item % 2 === 0) {
    arr.push(item);
  }
});
console.log(evenNum);

// filter --> sama seperti map
// return array baru sesuai dengan filtering
let oddNum = number.filter((item) => {
  return item % 2 !== 0;
});
console.log(oddNum);

let data = [
  { name: { firstName: "Ahmad", lastName: "Bahrudin" }, hobi: "sepeda" },
  { name: { firstName: "Diko" }, hobi: "hiking" },
  { name: { firstName: "Rizal", lastName: "Permadi" }, hobi: "masak" },
];

let hasil = ``;
data.forEach((item) => {
  hasil += `Name: ${item.name.firstName} ${
    item.name.lastName ? item.name.lastName : "\b"
  } \n`;
});

console.log(hasil);
