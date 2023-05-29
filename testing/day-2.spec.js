const {
  evenAndOdd,
  findEven,
  factorial,
  fibonacci,
} = require("../functions/day-2");

test("menunjukkan angka genap dan ganjil", () => {
  expect(evenAndOdd(5)).toEqual("even number", "odd number");
});

test("mencari angka genap kurang dari 5", () => {
  expect(findEven(5)).toMatchObject([0, 2, 4]);
});

test("mencari factorial dari angka 5", () => {
  expect(factorial(5)).toEqual(120);
});

test("mencari fibonacci dari angka 5", () => {
  expect(fibonacci(5).findFibo()).toEqual([0, 1, 1, 2, 3]);
});
