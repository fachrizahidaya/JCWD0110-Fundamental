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

function angleTriangle(a, b) {
  return {
    findAngle() {
      let c = 180 - a - b;
      return c;
    },
  };
}

function differenceDates(first, second) {
  return {
    findDate() {
      let day = "";
      let date1 = new Date(first);
      let date2 = new Date(second);
      let diffTime = Math.abs(date2 - date1);
      let diffDays = Math.ceil(diffTime / (1000 * 3600 * 24));
      return (day = `${diffDays} days`);
    },
  };
}

function convertToDays(days, daysInYear, daysInMonth) {
  return {
    calculateDays() {
      const year = Math.floor(days / daysInYear);
      const residualYear = days - daysInYear;
      const month = Math.floor(residualYear / daysInMonth);
      const residualMonth = residualYear % daysInMonth;
      return `${year} year, ${month} month, ${residualMonth} days`;
    },
  };
}

module.exports = {
  formulaRectangle,
  formulaCircle,
  angleTriangle,
  differenceDates,
  convertToDays,
};
