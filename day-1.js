function formulaRectangle(length, width) {
  return {
    area: length * width,
    perimeter: 2 * (length + width),
  };
}

function formulaCircle(r) {
  return {
    diameter: 2 * r,
    area: Math.ceil(Math.PI * Math.pow(r, 2)),
    perimeter: Math.ceil(2 * Math.PI * r),
  };
}

module.exports = {
  formulaRectangle,
  formulaCircle,
};
