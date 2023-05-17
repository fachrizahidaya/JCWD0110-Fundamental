let list = [
  {
    name: "David",
    age: 20,
  },
];


const switchProp = (arr) => {
  let result = [];
  arr.map((item) => {
    console.log(item);
    let obj = {};
    for (let key in item) {
      obj[item[key]] = key;
    }
    result.push(obj);
  });
  return result;
};

let a = switchProp(list);
console.log(a);
