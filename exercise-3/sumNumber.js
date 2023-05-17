const sumNumber = (arr) => {
  let sum = 0;
  let array = arr.filter((item) => typeof item === "number");

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};

let a = [1, "string", null, false, undefined, 2, "yes", undefined];

let c = {
  name: "Riza",
  age: 25,
};

let b = sumNumber(a);
console.log(b);
