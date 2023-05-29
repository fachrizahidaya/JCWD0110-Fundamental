const { formulaRectangle, formulaCircle } = require("./day-1");

test("mencari area dan keliling rectangle", () => {
  expect(formulaRectangle(5, 3)).toMatchObject({
    area: 15,
    perimeter: 16,
  });
});

test("mencari komponen suatu rectangle", () => {
  expect(formulaCircle(10)).toMatchObject({
    diameter: 20,
    area: 315,
    perimeter: 63,
  });
});
