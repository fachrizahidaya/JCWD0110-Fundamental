const { sum, substr, greet } = require("../functions/sum");

// const testing = () => {
//   expect(sum(1, 2)).toBe(3);
// };

test("function penjumlahan hasilnya lebih dari 3", () => {
  expect(sum(1, 2)).toBeGreaterThan(1);
});

test("function pengurangan hasilnya 1", () => {
  expect(substr(2, 1)).toBe(1);
});

test("function muncul string hello world", () => {
  expect(greet()).toMatch("Hello");
});
