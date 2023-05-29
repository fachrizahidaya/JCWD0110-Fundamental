const { sum, substr } = require("./sum");

// const testing = () => {
//   expect(sum(1, 2)).toBe(3);
// };

test("function penjumlahan hasilnya 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("function pengurangan hasilnya 1", () => {
    expect(substr(2,1)).toBe(1)
})
