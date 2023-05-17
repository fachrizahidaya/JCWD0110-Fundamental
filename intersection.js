let obj1 = {
  a: 1,
  b: 2,
};

let obj2 = {
  a: 1,
  c: 3,
};

function findIntersection(object1, object2) {
  let res = {};
  for (let key in object1) {
    if (object1[key] === object2[key]) {
      res[key] = object1[key];
    }
  }
  return res;
}

console.log(findIntersection(obj1, obj2));
