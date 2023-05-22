// hash implementation - object
let obj = {
  David: "001 ",
  Buchanan: "002",
  Buchanan: "003",
};

let objKey = Object.keys(obj);
let objValue = Object.values(obj);
// console.log(objKey);
// console.log(objValue);

// hash implementation - Map

let myMap = new Map();
myMap.set("David", "001");
myMap.set("Buchanan", "002");
console.log(myMap);

for (let [key, value] of myMap) {
  console.log(`${key}: ${value}`);
}
