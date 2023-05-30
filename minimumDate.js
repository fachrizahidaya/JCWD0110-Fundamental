function minDate(arrDates) {
  let lowDate = arrDates[0];
  let lowDates = new Date(arrDates[0]);
  arrDates.forEach((item) => {
    if (new Date(item) < lowDates) {
      lowDate = item;
      lowDates = new Date(item);
    }
  });
  return lowDate;
}
let arr = ["2018-12-01", "2023-06-02", "2023-12-04"];
console.log(minDate(arr));
