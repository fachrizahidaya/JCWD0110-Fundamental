const findPrimitive = (arr) => {
  let primitive = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "object") {
      primitive.push(arr[i]);
    }
  }
  return primitive;
};

let a = [1, "string", null, false, undefined, 2, "yes", undefined];
let b = findPrimitive(a);
console.log(b);
