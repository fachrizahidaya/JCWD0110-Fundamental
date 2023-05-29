const {
  formulaRectangle,
  formulaCircle,
  angleTriangle,
  differenceDates,
  convertToDays,
} = require("../functions/day-1");

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

test("mencari sudut ketiga dari segitiga", () => {
  expect(angleTriangle(60, 60).findAngle()).toBe(60);
});

test("mencari selisih dua dates", () => {
  expect(differenceDates("2022-09-05", "2022-01-01").findDate()).toMatch(
    "247 days"
  );
});

test("mencari tahun, bulan dan hari dari days", () => {
  expect(convertToDays(400, 365, 30).calculateDays()).toMatch("1 year, 1 month, 5 days");
});
